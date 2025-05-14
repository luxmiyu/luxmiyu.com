<script lang="ts">
  import { type Snippet } from 'svelte'

  let {
    children,
    gap = '8px',
    padding = '0',
  }: {
    children: Snippet
    gap?: string
    padding?: string
  } = $props()
</script>

<main style:gap style:padding>
  {@render children?.()}
</main>

<style lang="sass">
  main
    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: center
    gap: 8px

    width: 100%
</style>
