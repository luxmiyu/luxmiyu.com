<script lang="ts">
  import { browser } from '$app/environment'

  import { Head, Header, Copy, Footer, Container, Separate, Box, Text } from '$lib/components'
  import Background from './Background.svelte'
  import Overlay from './Overlay.svelte'

  import Canvas from '$lib/classes/Canvas'

  let windowWidth = $state(0)
  let windowHeight = $state(0)

  let htmlCanvas: HTMLCanvasElement

  let { data } = $props()

  $effect(() => {
    if (browser) {
      draw()
    }
  })

  function draw() {
    const canvas = new Canvas(htmlCanvas)

    canvas.resize(windowWidth, windowHeight)
    canvas.clear()

    for (let j = 0; j < 4; j++) {
      for (let i = 0; i < 9; i++) {
        canvas.drawCircle(790 + i * 42, 400 + j * 42, 20, 'white', 3)
      }
    }
  }
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />

<Head
  title="luxmiyu → fzero"
  description="Design barriers for custom F-ZERO tracks using a canvas and a Tiled extension."
  image="/preview/fzero.jpg"
/>

<Background />

<canvas bind:this={htmlCanvas} width={windowWidth} height={windowHeight}></canvas>

<Overlay />

<style lang="sass">
  canvas
    position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0
</style>
