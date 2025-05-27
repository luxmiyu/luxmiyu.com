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

    fontSize = 'inherit',
    fontWeight = 'inherit',
  }: {
    value: string
    width?: string
    height?: string
    minWidth?: string
    minHeight?: string
    maxWidth?: string
    maxHeight?: string
    center?: boolean

    fontSize?: string
    fontWeight?: string
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

    &.center
      justify-content: center
</style>
