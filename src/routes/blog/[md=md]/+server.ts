import { error } from '@sveltejs/kit'

export async function GET({ params }) {
  const slug = params.md.replace('.md', '')

  const files = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default' })
  const content = await files[`../posts/${slug}.md`]()

  if (typeof content !== 'string') {
    throw error(404, `Could not find ${slug}`)
  }

  try {
    return new Response(content, {
      headers: {
        'Content-Type': 'text/markdown',
      },
    })
  } catch (e) {
    throw error(404, `Could not find ${slug}`)
  }
}
