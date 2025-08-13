import { redirect } from '@sveltejs/kit'
import { createPool } from '$lib/server/osu'

export async function load({ url }) {
  const json = url.searchParams.get('json')
  if (!json) return redirect(302, `/pool`)

  const { title, description, csv } = JSON.parse(decodeURIComponent(json))
  if (!title || !csv) return redirect(302, `/pool`)

  const edit = await createPool(title, description, csv)

  return redirect(302, `/pool/edit/${edit}`)
}
