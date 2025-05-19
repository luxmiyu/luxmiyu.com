<script lang="ts">
  import { type Snippet } from 'svelte'

  let {
    children,
    padding = '0',
    margin = '0',
  }: {
    children?: Snippet
    padding?: string
    margin?: string
  } = $props()
</script>

<div style:padding style:margin>
  {@render children?.()}
</div>

<style lang="sass">
  div
    display: flex
    justify-content: center
    align-items: center

    width: 100%
    height: 100%
</style>
