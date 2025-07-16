import { error } from '@sveltejs/kit'

export async function load({ params }) {
  throw error(404, `Could not find ${params.file}`)
}
