<script lang="ts">
  import { Grid, Button, Columns, Center } from '$lib/components'
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

<Center>
  <div class="container">
    <Grid columns={MAX.toString()}>
      {#each saved as color, i}
        <Button
          onclick={() => onclick(color, i)}
          background={color.toStringHex()}
          color={color.getContrastingTextColor().toStringHex()}
        >
          <Columns template="1fr 70px">
            {#if current === i}
              <p class="selected">[{color.getClosest().name}]</p>
              <p class="right selected">{color.toStringHex()}</p>
            {:else}
              <p>{color.getClosest().name}</p>
              <p class="right">{color.toStringHex()}</p>
            {/if}
          </Columns>
        </Button>
      {/each}
    </Grid>
    <div
      class="gradient"
      style:background="linear-gradient(to right, {saved.map((c) => c.toStringHex()).join(', ')})"
    ></div>
  </div>
</Center>

<style lang="sass">
  .container
    display: flex
    flex-direction: column
    gap: 8px
    width: 100%
    max-width: 680px
  .gradient
    height: 32px
    box-shadow: 4px 4px 0px 0px var(--shadow)

  p
    font-weight: 400
    overflow: hidden

    &.right
      display: flex
      align-items: center
      justify-content: flex-end
      text-align: right
      height: 100%
      width: 100%
      
    &.selected
      font-weight: 600
</style>
