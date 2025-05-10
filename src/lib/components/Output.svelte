<script lang="ts">
  let {
    value = $bindable(),
    width = '100%',
  }: {
    value: string
    width?: string
  } = $props()
</script>

<span style:width>{value}</span>

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
</style>
