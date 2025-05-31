<script lang="ts">
  import { Columns, Center, Grid } from '$lib/components'
  import Color from './Color'

  let {
    r = $bindable(),
    g = $bindable(),
    b = $bindable(),

    onRGBChange,
  }: {
    r: number
    g: number
    b: number

    onRGBChange: (slider: 'r' | 'g' | 'b', value: number) => void
  } = $props()

  let rgb = $derived(Color.fromRGB({ r, g, b }))
</script>

<main>
  <Columns template="32px 1fr">
    <Center><p class="subtitle center">R</p></Center>
    <input
      type="range"
      bind:value={r}
      min={0}
      max={255}
      step={1}
      style:--slider-a={Color.fromRGB({ r: 0, g, b }).toStringHex()}
      style:--slider-b={Color.fromRGB({ r: 255, g, b }).toStringHex()}
      style:--thumb-background={rgb.toStringHex()}
      style:--thumb-border={rgb.getContrastingTextColor().toStringHex()}
      style:background="linear-gradient(to right, var(--slider-a), var(--slider-b))"
      oninput={() => onRGBChange('r', r)}
    />

    <Center><p class="subtitle center">G</p></Center>
    <input
      type="range"
      bind:value={g}
      min={0}
      max={255}
      step={1}
      style:--slider-a={Color.fromRGB({ r, g: 0, b }).toStringHex()}
      style:--slider-b={Color.fromRGB({ r, g: 255, b }).toStringHex()}
      style:--thumb-background={rgb.toStringHex()}
      style:--thumb-border={rgb.getContrastingTextColor().toStringHex()}
      style:background="linear-gradient(to right, var(--slider-a), var(--slider-b))"
      oninput={() => onRGBChange('g', g)}
    />

    <Center><p class="subtitle center">B</p></Center>
    <input
      type="range"
      bind:value={b}
      min={0}
      max={255}
      step={1}
      style:--slider-a={Color.fromRGB({ r, g, b: 0 }).toStringHex()}
      style:--slider-b={Color.fromRGB({ r, g, b: 255 }).toStringHex()}
      style:--thumb-background={rgb.toStringHex()}
      style:--thumb-border={rgb.getContrastingTextColor().toStringHex()}
      style:background="linear-gradient(to right, var(--slider-a), var(--slider-b))"
      oninput={() => onRGBChange('b', b)}
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
