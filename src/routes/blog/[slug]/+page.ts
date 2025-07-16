import { error } from '@sveltejs/kit'
import { getPosts } from '../getPosts'
import type Post from '../Post'

export async function load({ params }) {
  const slug = params.slug
  const posts = getPosts()

  const index = posts.findIndex((post) => post.slug === slug)
  if (index === -1) throw error(404, 'Not found')

  const previous = index >= posts.length ? null : posts[index + 1]
  const next = index <= 0 ? null : posts[index - 1]

  try {
    const post = await import(`../posts/${params.slug}.md`)
    if (post.metadata.published === false) throw error(404)
    return {
      content: post.default,
      post: { ...post.metadata, slug } as Post,

      previous,
      next,
    }
  } catch (e) {
    throw error(404, `Could not find ${params.slug}`)
  }
}
