<script lang="ts">
  import { Box, Grid } from '$lib/components'

  interface SelectorOption {
    value: string
    label: string
  }

  let {
    label,
    options,
    value = $bindable(),
    width = 'auto',
  }: {
    label?: string
    options: SelectorOption[]
    value: string
    width?: string
  } = $props()
</script>

<Box {width} padding="4px" height="auto">
  <Grid columns={(options.length + (label ? 1 : 0)).toString()} gap="4px">
    {#if label}
      <p>{label}</p>
    {/if}

    {#each options as option}
      <button
        class="hover"
        class:selected={value === option.value}
        onclick={() => (value = option.value)}
      >
        {option.label}
      </button>
    {/each}
  </Grid>
</Box>

<style lang="sass">
  p
    display: flex
    justify-content: center
    align-items: center
    padding: 1px 8px
    font-weight: 400

  button
    display: flex
    justify-content: center
    align-items: center

    min-height: 24px
    padding: 1px 8px
    border-radius: 2px
    border: none
    color: var(--text)
    background: none
    cursor: pointer
    font-weight: 400

    &.selected
      background: var(--input)

    &:hover
      background: var(--input)

    &:active
      background: var(--input-hover)
</style>
