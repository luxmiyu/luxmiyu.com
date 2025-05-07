<script lang="ts">
  import { type Snippet } from 'svelte'

  let {
    children,
    borderless = false,
  }: {
    children?: Snippet
    borderless?: boolean
  } = $props()
</script>

<div class:borderless>
  {@render children?.()}
</div>

<style lang="sass">
  div
    width: 100%
    height: 100%

    box-shadow: 4px 4px 0px 0px #3a3a3a
    border: 1px solid #eaeaea
    background: #2a2a2a
    color: #eaeaea
    padding: 8px

    &.borderless
      border: none
</style>
