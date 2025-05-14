<script lang="ts">
  import { browser } from '$app/environment'

  let {
    value = $bindable(),
    width = 'auto',
    focus = false,
  }: {
    value: string
    width?: string
    focus?: boolean
  } = $props()

  let input: HTMLInputElement

  $effect(() => {
    if (focus) input.focus()
  })
</script>

<input type="text" bind:this={input} bind:value style:width />

<style lang="sass">
  input
    width: auto
    height: 36px

    border: 1px solid var(--text-disabled)
    background: var(--card)
    color: var(--text)
    padding: 8px
</style>
