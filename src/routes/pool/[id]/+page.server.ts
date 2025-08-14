import { getComputedPool, toPoolView } from '$lib/server/osu.js'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
  const id = params.id

  const pool = await getComputedPool(id)
  if (!pool) throw error(404, `Pool ${id} not found`)

  return { pool: toPoolView(pool) }
}
