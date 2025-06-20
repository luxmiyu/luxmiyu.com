<script lang="ts">
  import { type Snippet } from 'svelte'
  import type { Booleanish } from 'svelte/elements'

  let {
    children,
    borderless = false,

    padding = '8px',
    width = '100%',
    height = '100%',
  }: {
    children?: Snippet
    borderless?: Booleanish

    padding?: string
    width?: string
    height?: string
  } = $props()
</script>

<div class:borderless style:padding style:width style:height>
  {@render children?.()}
</div>

<style lang="sass">
  div
    width: 100%
    height: 100%

    box-shadow: 4px 4px 0px 0px var(--shadow)
    border: 1px solid var(--text)
    background: var(--card)
    color: var(--text)
    padding: 8px

    &.borderless
      border: none
</style>
