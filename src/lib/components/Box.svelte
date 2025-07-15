<script lang="ts">
  import { type Snippet } from 'svelte'

  let {
    children,
    borderless = false,

    padding = '8px',
    width = '100%',
    height = '100%',
    dark = false,
  }: {
    children?: Snippet
    borderless?: boolean

    padding?: string
    width?: string
    height?: string
    dark?: boolean
  } = $props()
</script>

<div class:borderless class:dark style:padding style:width style:height>
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

    &.dark
      background: var(--background)

    &.borderless
      border: none
</style>
