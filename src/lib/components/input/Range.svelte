<script lang="ts">
  let {
    value = $bindable(),
    min = 0,
    max = 100,
    step = 1,

    width = 'auto',

    focus = false,

    oninput,
  }: {
    value: number
    min: number
    max: number
    step: number

    width?: string

    focus?: boolean

    oninput?: () => void
  } = $props()

  let input: HTMLInputElement

  $effect(() => {
    if (focus) input.focus()
  })
</script>

<input type="range" bind:this={input} bind:value {min} {max} {step} style:width {oninput} />

<style lang="sass">
  input
    -webkit-appearance: none
    background: none
    border: none
    height: 23px
    margin: 0

    &::-webkit-slider-runnable-track
      width: 100%
      height: 8px
      cursor: pointer
      background: var(--range-background)
      border: 1px solid var(--range-border)
    
    &::-webkit-slider-thumb
      border: 1px solid var(--range-border)
      height: 16px
      width: 16px
      background: var(--range)
      cursor: pointer
      -webkit-appearance: none
      margin-top: -5px

    &:focus::-webkit-slider-runnable-track
      background: var(--range-background)

    &::-moz-range-track
      width: 100%
      height: 8px
      cursor: pointer
      background: var(--range-background)
      border: 1px solid var(--range-border)

    &::-moz-range-thumb
      border: 1px solid var(--range-border)
      height: 16px
      width: 16px
      background: var(--range)
      cursor: pointer

    &::-ms-track
      width: 100%
      height: 8px
      cursor: pointer
      background: transparent
      border-color: transparent
      color: transparent

    &::-ms-fill-lower
      background: var(--range-background)
      border: 1px solid var(--range-border)

    &::-ms-fill-upper
      background: var(--range-background)
      border: 1px solid var(--range-border)

    &::-ms-thumb
      border: 1px solid var(--range-border)
      height: 16px
      width: 16px
      background: var(--range)
      cursor: pointer
      margin-top: 0px

    &:focus::-ms-fill-lower
      background: var(--range-background)

    &:focus::-ms-fill-upper
      background: var(--range-background)
</style>
