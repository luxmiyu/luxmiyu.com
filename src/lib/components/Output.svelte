<script lang="ts">
  let {
    value = $bindable(),
    width = '100%',
    height = 'auto',
    minWidth = 'auto',
    minHeight = '36px',
    maxWidth = 'auto',
    maxHeight = 'auto',
    center = false,
    breakall = false,

    fontSize = 'inherit',
    fontWeight = 'inherit',
    monospace = false,
  }: {
    value: string
    width?: string
    height?: string
    minWidth?: string
    minHeight?: string
    maxWidth?: string
    maxHeight?: string
    center?: boolean
    breakall?: boolean

    fontSize?: string
    fontWeight?: string
    monospace?: boolean
  } = $props()
</script>

<span
  style:width
  style:height
  style:min-width={minWidth}
  style:min-height={minHeight}
  style:max-width={maxWidth}
  style:max-height={maxHeight}
  style:font-size={fontSize}
  style:font-weight={fontWeight}
  class:center
  class:breakall
  class:monospace
>
  {value}
</span>

<style lang="sass">
  span
    display: inline-flex
    align-items: center

    width: auto
    min-height: 36px

    border: 1px solid var(--text-disabled)
    background: var(--card)
    color: var(--text)
    padding: 8px

    &.breakall
      word-break: break-all

    &.center
      justify-content: center

    &.monospace
      font-family: monospace
      word-break: break-all
      overflow-wrap: anywhere
</style>
