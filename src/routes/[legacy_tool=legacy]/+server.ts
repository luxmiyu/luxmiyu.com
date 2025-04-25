import { redirect } from '@sveltejs/kit'

export function GET({ url }) {
  return redirect(301, `https://legacy.luxmiyu.com${url.pathname}${url.search}`)
}
