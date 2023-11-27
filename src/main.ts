import './style.sass'
import './reset.css'
import './theme.ts'

/*

from
<a class="button" href="https://anilist.co/user/luxmiyu/" data-icon="https://cdn.glitch.global/e5143343-dba7-4602-8cff-d021bb699e44/anilist.png?v=1677246315355" data-name="anilist">anilist.co/user/luxmiyu</a>

to
<a class="button" href="https://anilist.co/user/luxmiyu/" target="_blank">
  <img class="icon" src="https://cdn.glitch.global/e5143343-dba7-4602-8cff-d021bb699e44/anilist.png?v=1677246315355" alt="anilist icon">
  <p class="label">anilist.co/user/luxmiyu</p>
</a>

*/

const buttons = document.querySelectorAll('.button')
buttons.forEach((button) => {
  if (button.classList.contains('tool')) return

  const element = button as HTMLAnchorElement
  
  const icon = element.getAttribute('data-icon')
  const name = element.getAttribute('data-name')
  const label = element.innerText
  element.innerHTML = `
    <img class="icon" src="${icon}" alt="${name} icon">
    <p class="label">${label}</p>
  `

  element.setAttribute('target', '_blank')
})

/*

from
<a class="button tool" href="https://luxmiyu.com/sliders" data-icon="template">sliders</a>

to
<a class="button tool" href="https://luxmiyu.com/sliders" target="_blank">
  <span id="icon" class="material-symbols-rounded">template</span>
  <p class="label">sliders</p>
</a>

*/

const tools = document.querySelectorAll('.tool')
tools.forEach((tool) => {
  const element = tool as HTMLAnchorElement
  
  const icon = element.getAttribute('data-icon')
  const label = element.innerText
  element.innerHTML = `
    <span class="icon material-symbols-rounded">${icon}</span>
    <p class="label">${label}</p>
  `
  
  element.setAttribute('target', '_blank')
})
