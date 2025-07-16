import { error } from '@sveltejs/kit'

export async function load({ params }) {
  const slug = params.md.replace('.md', '')

  const files = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default' })

  const load = files[`../posts/${slug}.md`]
  if (typeof load !== 'function') throw error(404, `Could not find ${slug}.md`)

  const content = await load()
  if (typeof content !== 'string') throw error(500, `load() is not a function`)

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown',
    },
  })
}
