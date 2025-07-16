import { error, redirect } from '@sveltejs/kit'

export async function GET({ params }) {
  const slug = params.md.replace('.md', '')

  const files = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default' })

  const load = files[`../posts/${slug}.md`]
  if (typeof load !== 'function') return redirect(307, `/blog/404/${slug}.md`)

  const content = await load()
  if (typeof content !== 'string') throw error(500, `load() is not a function`)

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown',
    },
  })
}
