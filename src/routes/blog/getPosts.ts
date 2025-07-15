import type Post from './Post'

export async function getPosts() {
  const posts: Post[] = []

  const paths = import.meta.glob('./posts/*.md', { eager: true })

  for (const path in paths) {
    const file = paths[path]

    if (file && typeof file === 'object' && 'metadata' in file) {
      const slug = path.replace('./posts/', '').replace('.md', '')
      const metadata = file.metadata as Omit<Post, 'slug'>
      const post = { ...metadata, slug } satisfies Post

      if (post.published) posts.push(post)
    }
  }

  return posts.toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
