import { redirect } from '@sveltejs/kit'

export async function GET({ url }) {
  return redirect(302, `/pool`)
}
