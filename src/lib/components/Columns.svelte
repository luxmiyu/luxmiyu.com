<script lang="ts">
  import { type Snippet } from 'svelte'

  let {
    children,
    template = 'repeat(1, 1fr)',
    gap = '8px',
  }: {
    children: Snippet
    template?: string
    gap?: string
  } = $props()
</script>

<main style:grid-template-columns={template} style:gap>
  {@render children?.()}
</main>

<style lang="sass">
  main
    display: grid
    grid-template-columns: repeat(1, 1fr)
    gap: 8px

    width: 100%
</style>
