<script lang="ts">
  import { type Snippet } from 'svelte'

  let {
    children,
    borderless = false,
    nopadding = false,

    width = '100%',
    height = '100%',
  }: {
    children?: Snippet
    borderless?: boolean
    nopadding?: boolean

    width?: string
    height?: string
  } = $props()
</script>

<div class:borderless class:nopadding style:width style:height>
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

    &.nopadding
      padding: 0
</style>
