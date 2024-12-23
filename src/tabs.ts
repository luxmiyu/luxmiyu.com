const buttons = {
  default: document.getElementById('tab-default'),
  apps: document.getElementById('tab-apps'),
  active: document.getElementById('tab-active'),
  inactive: document.getElementById('tab-inactive'),
  unused: document.getElementById('tab-unused'),
}

function getTab(name: string): Element[] {
  const all = document.querySelectorAll(`.tab-${name}`) as NodeListOf<Element>
  return Array.from(all)
}

function closeAllTabs() {
  for (const name in buttons) {
    const button = (buttons as any)[name]
    button.classList.remove('active')

    for (const tab of getTab(name)) {
      tab.classList.add('hidden')
    }
  }
}

function openTab(name: string) {
  const button = (buttons as any)[name]
  button.classList.add('active')

  for (const tab of getTab(name)) {
    tab.classList.remove('hidden')
  }
}

for (const name in buttons) {
  const button = (buttons as any)[name]
  button.addEventListener('click', () => {
    closeAllTabs()
    openTab(name)
  })
}

export {}