import { db } from '$lib/server/db'
import { getComputedPool, toPoolView } from '$lib/server/osu'
import type { Pool } from '$lib/types/osu'
import { error } from '@sveltejs/kit'

export async function GET({ url }) {
  const id = url.searchParams.get('id')
  if (!id) return new Response('Missing id', { status: 400 })

  const pool = await getComputedPool(id)
  if (!pool) throw error(404, `Pool ${id} not found`)

  return new Response(JSON.stringify(toPoolView(pool)), { status: 200 })
}
