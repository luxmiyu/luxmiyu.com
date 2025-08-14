import { env } from '$env/dynamic/private'
import type {
  CSV,
  ComputedMap,
  Pool,
  BeatmapDifficultyAttributes,
  BeatmapExtended,
  CachedBeatmap,
  ComputedPool,
} from '$lib/types/osu'
import { db } from '$lib/server/db'
import { error } from '@sveltejs/kit'
import arraysEquivalent from '$lib/util/arraysEquivalent'

let cachedToken: string | null = null
let refreshToken: string | null = null
let tokenExpiry = 0

async function getAccessToken(): Promise<string | null> {
  if (cachedToken && Date.now() < tokenExpiry) {
    return cachedToken
  } else if (refreshToken) {
    return refreshAccessToken()
  } else {
    return newAccessToken()
  }
}

async function newAccessToken(): Promise<string | null> {
  const response = await fetch('https://osu.ppy.sh/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: env.OSU_CLIENT_ID,
      client_secret: env.OSU_CLIENT_SECRET,
      grant_type: 'client_credentials',
      scope: 'public',
    }),
  })

  if (!response.ok) {
    console.error(await response.text())
    throw error(response.status, `Failed to fetch access token - ${response.statusText}`)
  }

  const data = await response.json()

  cachedToken = data.access_token
  refreshToken = data.refresh_token
  tokenExpiry = Date.now() + data.expires_in * 1000 - 60000

  return cachedToken
}

async function refreshAccessToken(): Promise<string | null> {
  const response = await fetch('https://osu.ppy.sh/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: env.OSU_CLIENT_ID,
      client_secret: env.OSU_CLIENT_SECRET,
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  })

  if (!response.ok) {
    console.error(await response.text())
    throw error(response.status, `Failed to refresh access token - ${response.statusText}`)
  }

  const data = await response.json()

  cachedToken = data.access_token
  refreshToken = data.refresh_token
  tokenExpiry = Date.now() + data.expires_in * 1000 - 60000

  return cachedToken
}

export async function osu<T = unknown>(
  url: string,
  method = 'GET',
  body?: Record<string, unknown>
): Promise<T> {
  const accessToken = await getAccessToken()

  const response = await fetch(new URL(url), {
    method,
    headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
    ...(body && { body: JSON.stringify(body) }),
  })

  if (!response.ok)
    throw error(
      response.status,
      `Failed to fetch ${url} - ${response.status} ${response.statusText}`
    )

  return await response.json()
}

const getBeatmap = (id: string) => osu<BeatmapExtended>(`https://osu.ppy.sh/api/v2/beatmaps/${id}`)

const getBeatmaps = (ids: string[]): Promise<{ beatmaps: BeatmapExtended[] }> =>
  osu<{ beatmaps: BeatmapExtended[] }>(
    `https://osu.ppy.sh/api/v2/beatmaps?ids[]=${ids.join('&ids[]=')}`
  )

const getBeatmapAttributes = (id: string, mods: string[] = []) =>
  osu<{ attributes: BeatmapDifficultyAttributes }>(
    `https://osu.ppy.sh/api/v2/beatmaps/${id}/attributes`,
    'POST',
    {
      mods,
      ruleset: 'osu',
    }
  )

// ###############################################################################################

// 'EZHDDT' -> ['EZ', 'HD', 'DT']
// '-' -> []
function splitMods(mods: string): string[] {
  return [...mods.matchAll(/.{2}/g)].map((m) => m[0])
}

function splitModsFiltered(mods: string): string[] {
  const stableMods = ['EZ', 'NF', 'HT', 'HR', 'DT', 'NC', 'HD', 'FL', 'RX', 'AP', 'SO']
  const split = splitMods(mods.toUpperCase()).filter((m) =>
    stableMods.some((mod) => m.toUpperCase() === mod)
  )

  return split
}

const ar2ms = (ar: number) => (ar < 5 ? 1800 - ar * 120 : 1200 - (ar - 5) * 150)
const ms2ar = (ms: number) => (ms > 1200 ? (1800 - ms) / 120 : 5 + (1200 - ms) / 150)
const od2ms = (od: number) => 80 - 6 * od
const ms2od = (ms: number) => (80 - ms) / 6

function formatLength(length: number): string {
  let remaining = length

  const hours = Math.floor(remaining / 3600)
  remaining %= 3600
  const minutes = Math.floor(remaining / 60)
  const seconds = Math.floor(remaining % 60)

  const format = (num: number) => num.toString().padStart(2, '0')

  return hours > 0
    ? `${hours}:${format(minutes)}:${format(seconds)}`
    : `${minutes}:${format(seconds)}`
}

function computeCachedBeatmap(cached: CachedBeatmap, csv: CSV): ComputedMap {
  const map = cached.beatmap
  const split = splitModsFiltered(csv.mods.toUpperCase())

  let cs = map.cs
  let ar = map.ar
  let od = map.accuracy
  let hp = map.drain
  let length = map.total_length
  let bpm = map.bpm ?? 0

  if (split.includes('EZ')) {
    cs = cs * 0.5
    ar = ar * 0.5
    od = od * 0.5
    hp = hp * 0.5
  }

  if (split.includes('HR')) {
    cs = Math.min(cs * 1.3, 10)
    ar = Math.min(ar * 1.4, 10)
    od = Math.min(od * 1.4, 10)
    hp = Math.min(hp * 1.4, 10)
  }

  if (split.includes('HT')) {
    ar = ms2ar(ar2ms(ar) / 0.75)
    od = ms2od(od2ms(od) / 0.75)
    length /= 0.75
    bpm *= 0.75
  }

  if (split.includes('DT')) {
    ar = ms2ar(ar2ms(ar) / 1.5)
    od = ms2od(od2ms(od) / 1.5)
    length /= 1.5
    bpm *= 1.5
  }

  return {
    section: csv.section,
    label: csv.label,
    color: csv.color,

    id: map.id.toString(),
    set: map.beatmapset_id.toString(),
    cover: map.beatmapset.covers.cover,

    artist: map.beatmapset.artist,
    title: map.beatmapset.title,
    difficulty: map.version,
    mapper: map.beatmapset.creator,

    stars: '...', // with empty star rating
    combo: map.max_combo.toFixed(0),
    length: formatLength(length),
    bpm: bpm.toFixed(1),

    cs: cs.toFixed(1),
    ar: ar.toFixed(1),
    od: od.toFixed(1),
    hp: hp.toFixed(1),

    mods: csv.mods,
  }
}

export async function computeCSVs(maps: CSV[]): Promise<ComputedMap[]> {
  const cachedBeatmaps: CachedBeatmap[] = await db
    .collection<CachedBeatmap>('pool_cache')
    .find(
      {
        id: { $in: maps.map((m) => m.id) },
      },
      { projection: { _id: 0 } }
    )
    .toArray()

  const notCached = maps.filter((m) => !cachedBeatmaps.find((b) => b.id === m.id))

  if (notCached.length > 0) {
    const fetchedBeatmaps = await getBeatmaps(notCached.map((m) => m.id))
    const toCached: CachedBeatmap[] = fetchedBeatmaps.beatmaps.map((b) => ({
      id: b.id.toString(),
      beatmap: b,
      star_rating: {},
      updated: new Date().toISOString(),
    }))

    if (toCached.length > 0) {
      await db.collection('pool_cache').insertMany(toCached)
      cachedBeatmaps.push(...toCached)
    }
  }

  const toCompute: { cached: CachedBeatmap; csv: CSV }[] = []

  for (const csv of maps) {
    const cached = cachedBeatmaps.find((b) => b.id === csv.id)
    if (cached) toCompute.push({ cached, csv })
  }

  const computedMaps = toCompute.map(({ cached, csv }) => computeCachedBeatmap(cached, csv))

  const withStarRatings = getStarRatings(cachedBeatmaps, computedMaps)

  return withStarRatings
}

export async function computePool(pool: Pool): Promise<ComputedPool> {
  const { csvs, ...rest } = pool
  const computedPool: ComputedPool = { ...rest, maps: await computeCSVs(csvs) }

  return computedPool
}

export function parseCSVs(csv: string): CSV[] {
  const csvs: CSV[] = []

  const rows = csv.trim().split('\n').slice(0, 50)

  for (const row of rows) {
    if (row.length <= 3) continue

    const [section, label, color, id, mods] = row.split(',')
    if (!section || !label || !color || !id || !mods) {
      continue
    }

    csvs.push({ section, label, color, id, mods })
  }

  return csvs
}

export function unparseCSV(csv: CSV): string {
  return `${csv.section},${csv.label},${csv.color},${csv.id},${csv.mods}`
}

export function unparseCSVs(csvs: CSV[]): string {
  return csvs.map(unparseCSV).join('\n')
}

// ##############################################################################################

type QueueItem = {
  id: string
  mods: string
}

const queue: QueueItem[] = []

let interval: NodeJS.Timeout | null = null

async function queryQueue() {
  if (queue.length === 0) {
    clearInterval(interval!)
    interval = null
    return
  }

  // remove duplicates
  const queueSet = new Set(queue.map((q) => JSON.stringify(q)))
  queue.length = 0
  queue.push(...Array.from(queueSet).map((q) => JSON.parse(q)))

  try {
    const queueItem = queue.shift()
    if (!queueItem) return

    const id = queueItem.id

    const split = splitModsFiltered(queueItem.mods.toUpperCase())

    const cachedBeatmap = await db
      .collection<CachedBeatmap>('pool_cache')
      .findOne({ id }, { projection: { _id: 0 } })
    if (!cachedBeatmap) return

    // check if mod combination already exists
    for (const currentMods in cachedBeatmap.star_rating) {
      if (arraysEquivalent(split, splitModsFiltered(currentMods))) return
    }

    const beatmapAttributes = await getBeatmapAttributes(id, split)
    if (!beatmapAttributes) return

    cachedBeatmap.star_rating[queueItem.mods] = beatmapAttributes.attributes.star_rating
    cachedBeatmap.updated = new Date().toISOString()

    await db.collection('pool_cache').updateOne({ id }, { $set: cachedBeatmap })
  } catch (error) {
    console.error(error)
  }
}

function startQueue() {
  if (interval === null) {
    queryQueue()
    interval = setInterval(queryQueue, 1000)
  }
}

function getStarRatings(
  cachedBeatmaps: CachedBeatmap[],
  computedMaps: ComputedMap[]
): ComputedMap[] {
  for (const computedMap of computedMaps) {
    const cachedBeatmap = cachedBeatmaps.find((b) => b.id === computedMap.id)
    if (!cachedBeatmap) continue

    // find if existing mod combination
    loop: for (const [mods, starRating] of Object.entries(cachedBeatmap.star_rating)) {
      const targetMods = splitMods(computedMap.mods)
      const currentMods = splitMods(mods)

      if (arraysEquivalent(targetMods, currentMods)) {
        computedMap.stars = starRating.toFixed(1)
        break loop
      }
    }

    // if it doesn't exist, queue it
    if (computedMap.stars === '...') {
      queue.push({ id: computedMap.id, mods: computedMap.mods })

      startQueue()
    }
  }

  return computedMaps
}

// ##############################################################################################

export function generateKey(length: number = 8): string {
  const charset = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return Array.from({ length }, () => charset[Math.floor(Math.random() * charset.length)]).join('')
}

export function toPoolView(pool: ComputedPool): Omit<ComputedPool, 'key'> {
  const { key, ...rest } = pool
  return rest
}

export async function getPool(id: string): Promise<Pool | null> {
  const pool = await db.collection<Pool>('pool').findOne({ id }, { projection: { _id: 0 } })
  return pool as Pool | null
}

export async function getComputedPool(id: string): Promise<ComputedPool | null> {
  const pool = await getPool(id)
  if (!pool) return null

  return await computePool(pool)
}

export async function createPool(title: string, description: string, csv: string): Promise<string> {
  const csvs = parseCSVs(csv)

  const id = generateKey()
  const key = generateKey(24)

  const alreadyExists = await getPool(id)
  if (alreadyExists) return createPool(title, description, csv)

  const pool: Pool = {
    id,
    key,
    title: title.slice(0, 400),
    description: description.slice(0, 8000),
    csvs: csvs.slice(0, 50),
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  }

  await db.collection('pool').insertOne(pool)

  return `${id}-${key}`
}

export async function regeneratePoolUrl(oldId: string, oldKey: string): Promise<string> {
  const pool = await getPool(oldId)
  if (!pool) throw error(404, 'Pool not found')
  if (oldKey !== pool.key) throw error(401, 'Unauthorized')

  const id = generateKey()
  const key = generateKey(24)

  const alreadyExists = await getPool(id)
  if (alreadyExists) return regeneratePoolUrl(oldId, oldKey)

  await db.collection('pool').updateOne({ id: oldId }, { $set: { id, key } })

  return `${id}-${key}`
}
