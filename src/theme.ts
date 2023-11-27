interface Color {
  name: string
  dark: string
  light: string
}

const colors: Color[] = [
  { dark: 'eaeaea', light: '2a2a2a', name: 'text' },
  { dark: 'bababa', light: '5a5a5a', name: 'text-secondary' },
  { dark: 'cd435c', light: 'e86880', name: 'selection' },
  { dark: 'eaeaea', light: '2a2a2a', name: 'selection-text' },
  { dark: '1a1a1a', light: 'eaeaea', name: 'background' },
  { dark: '222222', light: 'dedede', name: 'background-accent' },
  { dark: '3a3a3a', light: 'd2d2d2', name: 'shadow' },
  { dark: '2a2a2a', light: 'd8d8d8', name: 'button' },
  { dark: 'bababa', light: '5a5a5a', name: 'button-border' },
  { dark: '3a3a3a', light: 'eaeaea', name: 'button-hover' },
  { dark: '5a5a5a', light: 'fafafa', name: 'button-active' },
  { dark: '2a2a2a', light: 'd8d8d8', name: 'input' },
  { dark: '5a5a5a', light: '8a8a8a', name: 'input-border' },
  { dark: 'eaeaea', light: '5a5a5a', name: 'scrollbar-thumb' },
  { dark: '1a1a1a', light: 'eaeaea', name: 'scrollbar-track' },
  { dark: 'eaeaea', light: '4a4a4a', name: 'icon' },
]

const buttonThemeToggle = document.getElementById('theme-toggle')

if (buttonThemeToggle) {
  buttonThemeToggle.addEventListener('click', () => {
    toggleTheme()
  })
}

// when the user presses alt + t, toggle the theme
document.addEventListener('keydown', (event) => {
  if (event.altKey && event.key === 'l') {
    toggleTheme()
  }
})

function toggleTheme() {
  localStorage.setItem('theme', localStorage.getItem('theme') === 'dark' ? 'light' : 'dark')

  updateTheme()
}

function updateTheme() {
  // default to dark unless it's already set to light
  let theme: 'dark' | 'light' = localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
  localStorage.setItem('theme', theme)

  if (buttonThemeToggle) {
    if (theme === 'dark') {
      buttonThemeToggle.innerHTML = 'switch to light theme 🌞'
    } else {
      buttonThemeToggle.innerHTML = 'switch to dark theme 🌚'
    }
  }

  for (let color in colors) {
    let colorName = colors[color].name
    let colorValue = colors[color][theme]
    document.documentElement.style.setProperty(`--color-${colorName}`, `#${colorValue}`)
  }
}

updateTheme()

export {}