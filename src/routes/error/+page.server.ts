import { error } from '@sveltejs/kit'

export async function load({ params }) {
  throw error(418, `I'm a teapot`)
}
