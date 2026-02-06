<script lang="ts">
  import { browser } from '$app/environment'
  import {
    Head,
    Header,
    Footer,
    Container,
    Input,
    Text,
    Grid,
    Button,
    Box,
    Copy,
  } from '$lib/components'

  const MINO_SIZE = 5 * 8

  function loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image()

      img.onload = () => resolve(img)
      img.onerror = reject

      img.src = src
    })
  }

  let width = $state(10)
  let height = $state(10)
  let canvasWidth = $derived(width * MINO_SIZE)
  let canvasHeight = $derived(height * MINO_SIZE)

  let current = $state('g')

  let canvas: HTMLCanvasElement
  let drawing = $state(false)

  let hoverX = $state(-1)
  let hoverY = $state(-1)

  $effect(() => {
    canvas.addEventListener('pointerdown', (e) => {
      drawing = true
      paint(e)
      canvas.setPointerCapture(e.pointerId)
    })

    canvas.addEventListener('pointerup', () => {
      drawing = false
    })

    canvas.addEventListener('pointermove', (e) => {
      hoverX = Math.floor(e.offsetX / MINO_SIZE)
      hoverY = Math.floor(e.offsetY / MINO_SIZE)

      if (!drawing) {
        draw()
        return
      } else {
        paint(e)
      }
    })

    canvas.addEventListener('pointerleave', () => {
      hoverX = -1
      hoverY = -1
      draw()
    })
  })

  let minos: string[][] = $state(
    Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => '.'))
    // [
    //   ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    //   ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    //   ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    //   ['.', '.', 'l', 'l', '.', '.', '.', '.', 's', 's'],
    //   ['.', '.', '.', 'l', 'z', 'z', '.', 's', 's', 'i'],
    //   ['j', 'j', '.', 'l', 'g', 'z', 'z', 'o', 'o', 'i'],
    //   ['j', '.', '.', 'g', 'g', 'g', 'g', 'o', 'o', 'i'],
    //   ['j', '.', '.', '.', 'g', 'g', 'g', 'g', 'g', 'i'],
    //   ['g', 'g', '.', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
    //   ['g', 'g', '.', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
    // ]
  )

  let url: string = $derived(
    `https://tetobooru.luxmiyu.com/${width}x${height}/${minos.map((row) => row.join('')).join('')}?scale=8`
  )

  let tetris: string = $derived(
    `<tetris>\n${minos.map((row) => row.join('')).join('\n')}\n</tetris>`
  )

  async function draw() {
    if (browser) {
      // crop board if it's too big
      minos = minos.slice(0, height).map((row) => row.slice(0, width))

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const [i, j, l, o, s, z, t, g] = await Promise.all([
        loadImage('https://tetobooru.luxmiyu.com/1x1/i?scale=8'),
        loadImage('https://tetobooru.luxmiyu.com/1x1/j?scale=8'),
        loadImage('https://tetobooru.luxmiyu.com/1x1/l?scale=8'),
        loadImage('https://tetobooru.luxmiyu.com/1x1/o?scale=8'),
        loadImage('https://tetobooru.luxmiyu.com/1x1/s?scale=8'),
        loadImage('https://tetobooru.luxmiyu.com/1x1/z?scale=8'),
        loadImage('https://tetobooru.luxmiyu.com/1x1/t?scale=8'),
        loadImage('https://tetobooru.luxmiyu.com/1x1/g?scale=8'),
      ])

      const MINOS = { i, j, l, o, s, z, t, g }

      ctx.clearRect(0, 0, canvasWidth, canvasHeight)

      minos.forEach((row, y) => {
        row.forEach((mino, x) => {
          if (mino === '.') return
          ctx.drawImage(MINOS[mino as keyof typeof MINOS], x * MINO_SIZE, y * MINO_SIZE)
        })
      })

      if (hoverX >= 0 && hoverY >= 0) {
        ctx.fillStyle = '#ffffff22'
        ctx.fillRect(hoverX * MINO_SIZE, hoverY * MINO_SIZE, MINO_SIZE, MINO_SIZE)
      }
    }
  }

  function paint(e: PointerEvent) {
    const x = Math.floor(e.offsetX / MINO_SIZE)
    const y = Math.floor(e.offsetY / MINO_SIZE)
    minos[y][x] = current
    draw()
  }

  function clear() {
    minos = Array.from({ length: height }, () => Array.from({ length: width }, () => '.'))
    draw()
  }
</script>

<Head
  title="luxmiyu → tetobooru"
  description="A simple Tetris board image generator"
  image="/preview/tetobooru.jpg"
/>

<Container fill>
  <Header title="tetobooru" description="a simple tetris board image generator" />

  <Text>
    <p class="center">
      Board Size:
      <Input.Number bind:value={width} min={1} max={30} step={1} />
      x
      <Input.Number bind:value={height} min={1} max={30} step={1} />
    </p>
  </Text>

  <canvas bind:this={canvas} width={canvasWidth} height={canvasHeight}></canvas>

  <Grid columns="9">
    <Button selected={current === '.'} onclick={() => (current = '.')}></Button>
    <Button selected={current === 'i'} onclick={() => (current = 'i')}>
      <img src="https://tetobooru.luxmiyu.com/4x2/iiii....?scale=3" alt="I Piece" />
    </Button>
    <Button selected={current === 'j'} onclick={() => (current = 'j')}>
      <img src="https://tetobooru.luxmiyu.com/3x2/j..jjj?scale=3" alt="J Piece" />
    </Button>
    <Button selected={current === 'l'} onclick={() => (current = 'l')}>
      <img src="https://tetobooru.luxmiyu.com/3x2/..llll?scale=3" alt="L Piece" />
    </Button>
    <Button selected={current === 'o'} onclick={() => (current = 'o')}>
      <img src="https://tetobooru.luxmiyu.com/2x2/oooo?scale=3" alt="O Piece" />
    </Button>
    <Button selected={current === 's'} onclick={() => (current = 's')}>
      <img src="https://tetobooru.luxmiyu.com/3x2/.ssss.?scale=3" alt="S Piece" />
    </Button>
    <Button selected={current === 'z'} onclick={() => (current = 'z')}>
      <img src="https://tetobooru.luxmiyu.com/3x2/zz..zz?scale=3" alt="Z Piece" />
    </Button>
    <Button selected={current === 't'} onclick={() => (current = 't')}>
      <img src="https://tetobooru.luxmiyu.com/3x2/.t.ttt?scale=3" alt="T Piece" />
    </Button>
    <Button selected={current === 'g'} onclick={() => (current = 'g')}>
      <img src="https://tetobooru.luxmiyu.com/1x1/g?scale=3" alt="G Piece" />
    </Button>
  </Grid>

  <Box height="auto" padding="0">
    <Text>
      <pre>{tetris}</pre>
    </Text>
  </Box>

  <Grid columns="2">
    <Copy value={url} text="Copy Link" />
    <Button onclick={clear}>Clear Board</Button>
  </Grid>

  <Footer extra="tetobooru" extraURL="https://github.com/luxmiyu/tetobooru" />
</Container>

<style lang="sass">
  canvas
    background: #111111
    cursor: crosshair
</style>
