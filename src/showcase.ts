const previous = document.getElementById('showcase-previous') as HTMLDivElement
const next = document.getElementById('showcase-next') as HTMLDivElement

const details = document.getElementById('showcase-details') as HTMLAnchorElement
const image = document.getElementById('showcase-image') as HTMLImageElement
const title = document.getElementById('showcase-title') as HTMLParagraphElement

interface Item {
  name: string
  url: string
  image: string
}

const items: Item[] = [
  {
    name: 'Daily Cute Anime Girl',
    url: 'luxmiyu.com/dcag',
    image: 'https://cdn.glitch.global/e5143343-dba7-4602-8cff-d021bb699e44/dcag_previw2.png?v=1734967238446'
  },
  {
    name: 'Minesweeper',
    url: 'luxmiyu.com/minesweeper',
    image: 'https://cdn.glitch.global/e5143343-dba7-4602-8cff-d021bb699e44/preview_minesweeper.png?v=1707573320237'
  },
  {
    name: 'Speedtune Tool for HSR',
    url: 'luxmiyu.com/speedtune',
    image: 'https://cdn.glitch.global/e5143343-dba7-4602-8cff-d021bb699e44/speedtune_preview.png?v=1709347687285'
  },
  {
    name: 'Honkai: Star Rail Banners',
    url: 'luxmiyu.com/hsr',
    image: 'https://cdn.glitch.global/e5143343-dba7-4602-8cff-d021bb699e44/hsr_preview.png?v=1708741205397'
  },
  {
    name: 'Drums',
    url: 'luxmiyu.com/drums',
    image: 'https://cdn.glitch.global/e5143343-dba7-4602-8cff-d021bb699e44/drums_preview3.png?v=1734967542759'
  },
  {
    name: 'Advanced osu! Slider Editor',
    url: 'luxmiyu.com/sliders',
    image: 'https://cdn.glitch.global/e5143343-dba7-4602-8cff-d021bb699e44/sliders_preview.png?v=1734967356455'
  },
  {
    name: 'Any Dimension Mod 2',
    url: 'luxmiyu.com/adm2',
    image: 'https://cdn.glitch.global/e5143343-dba7-4602-8cff-d021bb699e44/adm2_preview.png?v=1720819917966'
  },
  {
    name: 'Lights Out!',
    url: 'luxmiyu.com/lights',
    image: 'https://cdn.glitch.global/e5143343-dba7-4602-8cff-d021bb699e44/lights_preview.png?v=1734968068970'
  },
  {
    name: 'Color Picker',
    url: 'luxmiyu.com/color',
    image: 'https://cdn.glitch.global/e5143343-dba7-4602-8cff-d021bb699e44/color_preview.png?v=1734968134974'
  },
  {
    name: 'Qingque Tile Probabilities',
    url: 'luxmiyu.com/qingque',
    image: 'https://cdn.glitch.global/e5143343-dba7-4602-8cff-d021bb699e44/qingque_preview2.png?v=1734969302854'
  },
  {
    name: 'osu! Profile Collab',
    url: 'luxmiyu.com/osucollab',
    image: 'https://cdn.glitch.global/e5143343-dba7-4602-8cff-d021bb699e44/osucollab_preview.png?v=1734969386448'
  },
  // {
  //   name: 'https://luxmiyu.com/aaaa',
  //   url: 'luxmiyu.com/aaaa',
  //   image: 'bbbb'
  // },
]

const itemsRandomized = items.sort(() => Math.random() - 0.5)

function setItem(index: number) {
  const item = itemsRandomized[index]
  details.href = 'https://' + item.url
  image.src = item.image
  title.innerHTML = item.name
}

// random start
let index = Math.floor(Math.random() * items.length)
console.log(index)
setItem(index)

previous.addEventListener('click', () => {
  index--
  if (index < 0) index = items.length - 1
  setItem(index)
})

next.addEventListener('click', () => {
  index++
  if (index >= items.length) index = 0
  setItem(index)
})

export {}