import { error } from '@sveltejs/kit'
import { getPosts } from '../getPosts'
import type Post from '../Post'

export async function load({ params }) {
  const slug = params.slug
  const posts = getPosts()
  const published = posts.filter((post) => post.published)

  const exists = posts.some((post) => post.slug === slug)
  if (!exists) throw error(404, `Could not find ${slug}`)

  const index = published.findIndex((post) => post.slug === slug)

  const previous = index >= published.length ? null : published[index + 1]
  const next = index <= 0 ? null : published[index - 1]

  try {
    const post = await import(`../posts/${params.slug}.md`)
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
