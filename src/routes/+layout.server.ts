type Theme = 'light' | 'dark'

export async function load({ params, url, cookies }) {
  const themeCookie = cookies.get('theme')
  const theme: Theme = themeCookie === 'light' || themeCookie === 'dark' ? themeCookie : 'dark'
  const lightTheme = theme === 'light'

  return {
    theme,
    lightTheme,
  }
}
