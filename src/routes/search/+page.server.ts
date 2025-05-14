import { redirect } from '@sveltejs/kit'
import { type Result, getResult } from './search'

export function load({ url }) {
  const query = url.searchParams.get('q')
  if (!query) return {}

  const result = getResult(query)
  if (!result) return {}

  return redirect(302, result.url)
}
