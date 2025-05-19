<script lang="ts">
  import { type Snippet } from 'svelte'

  let {
    children,
    padding = '0',
    margin = '0',
    width = '100%',
    height = '100%',
  }: {
    children?: Snippet
    padding?: string
    margin?: string
    width?: string
    height?: string
  } = $props()
</script>

<div style:padding style:margin style:width style:height>
  {@render children?.()}
</div>

<style lang="sass">
  div
    display: flex
    justify-content: center
    align-items: center
</style>
