import { getPosts } from './getPosts'

export async function load() {
  const posts = await getPosts()
  return { posts }
}
