<script lang="ts">
  let { value = $bindable() }: { value: string } = $props()
</script>

<div>{value}</div>

<style lang="sass">
  div
    width: 100%
    min-height: 32px

    border: 1px solid var(--text-disabled)
    background: var(--card)
    color: var(--text)
    padding: 8px
</style>
