<script lang="ts">
  let {
    value = $bindable(),
    cols = 30,
    rows = 10,
    width = 'auto',

    vertical = false,
    horizontal = false,

    focus = false,

    placeholder = '',
    monospace = false,
    required = false,

    oninput,
  }: {
    value: string
    cols?: number
    rows?: number
    width?: string

    vertical?: boolean
    horizontal?: boolean

    focus?: boolean

    placeholder?: string
    monospace?: boolean
    required?: boolean

    oninput?: () => void
  } = $props()

  let textarea: HTMLTextAreaElement

  $effect(() => {
    if (focus) textarea.focus()
  })
</script>

<textarea
  bind:this={textarea}
  bind:value
  {cols}
  {rows}
  style:width
  class:vertical
  class:horizontal
  {oninput}
  {placeholder}
  class:monospace
  {required}
>
</textarea>

<style lang="sass">
  textarea
    width: auto

    border: 1px solid var(--text-disabled)
    background: var(--card)
    color: var(--text)
    padding: 8px
    
    &.vertical
      resize: vertical

    &.horizontal
      resize: horizontal

    &.monospace
      font-family: monospace
</style>
