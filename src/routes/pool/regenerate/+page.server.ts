import { redirect } from '@sveltejs/kit'
import { regeneratePoolUrl } from '$lib/server/osu'

export async function load({ url }) {
  const id = url.searchParams.get('id') as string
  const key = url.searchParams.get('key') as string

  const poolUrl = await regeneratePoolUrl(id, key)

  return redirect(302, `/pool/edit/${poolUrl}`)
}
