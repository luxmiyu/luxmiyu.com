<script lang="ts">
  import { Head, Header, Footer, Container, Center, Grid, Text, Button } from '$lib/components'
  import Picker from './Picker.svelte'
  import Color from './Color'
  import RangesHSV from './RangesHSV.svelte'
  import RangesRGB from './RangesRGB.svelte'
  import InputColors from './InputColors.svelte'
  import Palette from './Palette.svelte'

  let h = $state(180)
  let s = $state(50)
  let v = $state(50)
  let hsv = $derived(Color.fromHSV({ h, s, v }))

  let rgb = $derived(Color.fromRGB(hsv.toRGB()))
  let r = $derived(rgb.r)
  let g = $derived(rgb.g)
  let b = $derived(rgb.b)

  function onRGBChange(slider: 'r' | 'g' | 'b', value: number) {
    let newR = slider === 'r' ? value : r
    let newG = slider === 'g' ? value : g
    let newB = slider === 'b' ? value : b
    let newHSV = Color.fromRGB({ r: newR, g: newG, b: newB }).toHSV()
    h = newHSV.h
    s = newHSV.s
    v = newHSV.v
  }

  function setColor(color: Color) {
    h = color.toHSV().h
    s = color.toHSV().s
    v = color.toHSV().v
  }

  async function smoothTransitionTo(color: Color) {
    const oldH = h
    const oldS = s
    const oldV = v

    const newH = color.toHSV().h
    const newS = color.toHSV().s
    const newV = color.toHSV().v

    function sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    }

    function ramp(t: number) {
      h = oldH + (newH - oldH) * t
      s = oldS + (newS - oldS) * t
      v = oldV + (newV - oldV) * t
    }

    for (let i = 0; i < 1; i += 0.02) {
      // ease exponential in-out
      let t = i < 0.5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1

      ramp(t)
      await sleep(1)
    }
  }

  // function onEyedropperClick() {
  //   if (!(window as any).EyeDropper)
  //     return alert(
  //       'The Eye Dropper API is an experimental feature and is not supported on this browser.'
  //     )

  //   new (window as any).EyeDropper()
  //     .open()
  //     .then((result: any) => {
  //       smoothTransitionTo(Color.fromHex(result.sRGBHex))
  //     })
  //     .catch((e: any) => {
  //       console.error(e)
  //     })
  // }

  smoothTransitionTo(Color.random())
</script>

<Head title="luxmiyu → color" description="a simple color picker" image="/preview/color.jpg" />

<Container fill>
  <Header title="color" description="a simple color picker" />

  <Text gap="16px">
    <Grid>
      <Center><Picker bind:h bind:s bind:v /></Center>
    </Grid>

    <Palette {h} {s} {v} {setColor} />

    <InputColors {hsv} {rgb} {smoothTransitionTo} />
    <RangesHSV bind:h bind:s bind:v />
    <RangesRGB bind:r bind:g bind:b {onRGBChange} />

    <Grid>
      <!-- <Button onclick={onEyedropperClick}>Eyedropper</Button> -->
      <Button onclick={() => smoothTransitionTo(Color.random())} keybind="KeyR">Randomize</Button>
    </Grid>
  </Text>

  <Footer />
</Container>
