<script lang="ts">
  let {
    checked = $bindable(),
    focus = false,
    oninput,
  }: {
    checked: boolean
    focus?: boolean
    oninput?: () => void
  } = $props()

  let input: HTMLInputElement

  $effect(() => {
    if (focus) input.focus()
  })
</script>

<input class="checkbox" type="checkbox" bind:this={input} bind:checked {oninput} />

<style lang="sass">
  .checkbox
    appearance: none

    width: 16px
    height: 16px

    border: 1px solid var(--text-disabled)
    background: var(--card)
    color: var(--text)
    padding: 8px

    cursor: pointer

    position: relative

    &::after
      content: ''
      position: absolute
      top: 2px
      left: 2px
      width: calc(100% - 4px)
      height: calc(100% - 4px)

      background: none

    &:checked
      color: var(--text)
      padding: 8px

      &::after
        background: var(--text)
</style>
