<script lang="ts">
  import { Grid, Button, Center } from '$lib/components'
  import Color from './Color'

  const MAX = 2

  let {
    h,
    s,
    v,

    setColor,
  }: {
    h: number
    s: number
    v: number

    setColor: (color: Color) => void
  } = $props()

  let current = $state(0)
  let saved: Color[] = $state(Array.from({ length: MAX }, () => Color.random()))

  $effect(() => {
    saved[current] = Color.fromHSV({ h, s, v })
  })

  function onclick(color: Color, i: number) {
    current = i
    setColor(color)
  }
</script>

<Grid>
  <Grid columns={MAX.toString()}>
    {#each saved as color, i}
      <Button
        onclick={() => onclick(color, i)}
        background={color.toStringHex()}
        color={color.getContrastingTextColor().toStringHex()}
      >
        <strong>{color.toStringHex()}</strong>
      </Button>
    {/each}
  </Grid>
  <div
    class="gradient"
    style:background="linear-gradient(to right, {saved.map((c) => c.toStringHex()).join(', ')})"
  ></div>
</Grid>

<style lang="sass">
  .gradient
    height: 32px
</style>
