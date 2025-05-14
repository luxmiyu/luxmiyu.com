<script lang="ts">
  import { browser } from '$app/environment'

  let {
    value = $bindable(),
    width = 'auto',
    focus = false,
    autocorrect = 'on',

    onEnter,
    oninput,
  }: {
    value: string
    width?: string
    focus?: boolean
    autocorrect?: 'on' | 'off'

    onEnter?: () => void
    oninput?: () => void
  } = $props()

  let input: HTMLInputElement

  $effect(() => {
    if (focus) input.focus()
  })

  function onkeypress(e: KeyboardEvent) {
    if (e.key === 'Enter' && onEnter) {
      if (e.repeat) return
      e.preventDefault()
      onEnter()
    }
  }
</script>

<input type="text" bind:this={input} bind:value style:width {onkeypress} {oninput} {autocorrect} />

<style lang="sass">
  input
    width: auto
    height: 36px

    border: 1px solid var(--text-disabled)
    background: var(--card)
    color: var(--text)
    padding: 8px
</style>
