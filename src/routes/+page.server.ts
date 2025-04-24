import type { Actions } from '@sveltejs/kit'

export const actions: Actions = {
  toggleTheme: ({ cookies }) => {
    const theme = cookies.get('theme') === 'dark' ? 'light' : 'dark'
    cookies.set('theme', theme, { path: '/', maxAge: 60 * 60 * 24 * 365 })
  },
}
