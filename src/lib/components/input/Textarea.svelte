<script lang="ts">
  let {
    value = $bindable(),
    cols = 30,
    rows = 10,
    width = 'auto',

    vertical = false,
    horizontal = false,
  }: {
    value: string
    cols?: number
    rows?: number
    width?: string

    vertical?: boolean
    horizontal?: boolean
  } = $props()
</script>

<textarea {cols} {rows} bind:value style:width class:vertical class:horizontal></textarea>

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
</style>
