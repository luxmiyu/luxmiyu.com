import { error } from '@sveltejs/kit'

export async function GET({ params }) {
  const slug = params.md.replace('.md', '')

  const files = import.meta.glob('../posts/*.md', { as: 'raw' })
  const content = await files[`../posts/${slug}.md`]()

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
