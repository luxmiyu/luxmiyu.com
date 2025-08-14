import { db } from '$lib/server/db'
import { getPool, parseCSVs, unparseCSVs } from '$lib/server/osu.js'
import type { Pool } from '$lib/types/osu'
import { error, redirect } from '@sveltejs/kit'
import type { Actions } from './$types'

export async function load({ params }) {
  const [id, key] = params.key.split('-')

  const pool = await getPool(id)
  if (!pool) throw error(404, 'Pool not found')
  if (key !== pool.key) throw error(401, 'Unauthorized')

  const unparsed = unparseCSVs(pool.csvs)

  return { pool: pool as Pool, csv: unparsed }
}

export const actions = {
  update: async ({ request }) => {
    const data = await request.formData()
    const id = data.get('id') as string
    const key = data.get('key') as string
    const title = data.get('title') as string
    const description = data.get('description') as string
    const csv = data.get('csv') as string
    if (!id || !key) return error(400, 'Missing fields')

    const pool = await db.collection<Pool>('pool').findOne({ id }, { projection: { _id: 0 } })
    if (!pool) throw error(404, 'Pool not found')
    if (key !== pool.key) throw error(401, 'Unauthorized')

    const updated = new Date().toISOString()
    const csvs = parseCSVs(csv)

    await db.collection('pool').updateOne(
      { id },
      {
        $set: {
          title: title.slice(0, 400),
          description: description.slice(0, 8000),
          csvs: csvs.slice(0, 50),
          updated,
        },
      }
    )
  },
  delete: async ({ request }) => {
    const data = await request.formData()
    const id = data.get('id') as string
    const key = data.get('key') as string
    if (!id || !key) return error(400, 'Missing fields')

    const pool = await db.collection<Pool>('pool').findOne({ id }, { projection: { _id: 0 } })
    if (!pool) throw error(404, 'Pool not found')
    if (key !== pool.key) throw error(401, 'Unauthorized')

    await db.collection('pool').deleteOne({ id })

    redirect(302, `/pool`)
  },
} satisfies Actions
