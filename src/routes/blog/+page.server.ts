import { getPosts } from './getPosts'

export async function load() {
  const posts = getPosts()
  return { posts }
}
