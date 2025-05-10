<script lang="ts">
  let {
    value = $bindable(),
    min = 0,
    max = 100,
    step = 1,

    width = 'auto',
  }: {
    value: number
    min: number
    max: number
    step: number

    width?: string
  } = $props()
</script>

<input type="number" bind:value {min} {max} {step} style:width />

<style lang="sass">
  input
    width: auto
    height: 36px

    border: 1px solid var(--text-disabled)
    background: var(--card)
    color: var(--text)
    padding: 8px
</style>
