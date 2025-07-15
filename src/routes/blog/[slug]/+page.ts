import { error } from '@sveltejs/kit'

export async function load({ params }) {
  try {
    const post = await import(`../posts/${params.slug}.md`)
    if (post.metadata.published === false) throw error(404)
    return {
      content: post.default,
      metadata: post.metadata,
    }
  } catch (e) {
    throw error(404, `Could not find ${params.slug}`)
  }
}
