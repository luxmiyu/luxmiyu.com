<script lang="ts">
  import { Columns, Center, Grid } from '$lib/components'
  import Color from './Color'

  let {
    h = $bindable(),
    s = $bindable(),
    v = $bindable(),
  }: {
    h: number
    s: number
    v: number
  } = $props()

  let hsv = $derived(Color.fromHSV({ h, s, v }))

  function applySV(color: Color): Color {
    return Color.fromHSV({ h: color.toHSV().h, s, v })
  }

  let gradientColors = $derived(
    [
      Color.fromHex('#ff0000'),
      Color.fromHex('#ffff00'),
      Color.fromHex('#00ff00'),
      Color.fromHex('#00ffff'),
      Color.fromHex('#0000ff'),
      Color.fromHex('#ff00ff'),
      Color.fromHex('#ff0000'),
    ].map(applySV)
  )

  let hueBackground = $derived(
    `linear-gradient(to right, ${gradientColors.map((c) => c.toStringRGB()).join(', ')})`
  )
</script>

<main>
  <Columns template="32px 1fr">
    <Center><p class="subtitle center">H</p></Center>
    <input
      type="range"
      bind:value={h}
      min={0}
      max={360}
      step={1}
      style:--thumb-background={hsv.toStringHex()}
      style:--thumb-border={hsv.getContrastingTextColor().toStringHex()}
      style:background={hueBackground}
    />

    <Center><p class="subtitle center">S</p></Center>
    <input
      type="range"
      bind:value={s}
      min={0}
      max={100}
      step={1}
      style:--slider-a={Color.fromHSV({ h, s: 0, v }).toStringHex()}
      style:--slider-b={Color.fromHSV({ h, s: 100, v }).toStringHex()}
      style:--thumb-background={hsv.toStringHex()}
      style:--thumb-border={hsv.getContrastingTextColor().toStringHex()}
      style:background="linear-gradient(to right, var(--slider-a), var(--slider-b))"
    />

    <Center><p class="subtitle center">V</p></Center>
    <input
      type="range"
      bind:value={v}
      min={0}
      max={100}
      step={1}
      style:--slider-a={Color.fromHSV({ h, s, v: 0 }).toStringHex()}
      style:--slider-b={Color.fromHSV({ h, s, v: 100 }).toStringHex()}
      style:--thumb-background={hsv.toStringHex()}
      style:--thumb-border={hsv.getContrastingTextColor().toStringHex()}
      style:background="linear-gradient(to right, var(--slider-a), var(--slider-b))"
    />
  </Columns>
</main>

<style lang="sass">
  main
    width: 100%

    input[type=range]
      width: 100%

      border: none
      background: none
      height: 23px
      -webkit-appearance: none
      width: 100%

      &::-webkit-slider-runnable-track
        width: 100%
        height: 24px
        padding: -10px
        cursor: pointer
        box-shadow: 4px 4px 0px 0px var(--shadow)

      &::-webkit-slider-thumb
        -webkit-appearance: none
        border: 2px solid var(--thumb-border)
        height: 24px
        width: 24px
        background: var(--thumb-background)
        cursor: pointer

        position: relative
</style>
