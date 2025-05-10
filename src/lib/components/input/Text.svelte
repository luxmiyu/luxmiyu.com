<script lang="ts">
  let {
    value = $bindable(),
    width = 'auto',
  }: {
    value: string
    width?: string
  } = $props()
</script>

<input type="text" bind:value style:width />

<style lang="sass">
  input
    width: auto
    height: 36px

    border: 1px solid var(--text-disabled)
    background: var(--card)
    color: var(--text)
    padding: 8px
</style>
