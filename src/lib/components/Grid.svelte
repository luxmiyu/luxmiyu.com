<script lang="ts">
  import { type Snippet } from 'svelte'

  let {
    children,
    columns = '1',
    minmax,
    gap = '8px',
  }: {
    children: Snippet
    columns?: string
    minmax?: string
    gap?: string
  } = $props()
</script>

{#if minmax}
  <main style:grid-template-columns="repeat(auto-fill, minmax({minmax}, 1fr))" style:gap>
    {@render children?.()}
  </main>
{:else}
  <main style:grid-template-columns="repeat({columns}, 1fr)" style:gap>
    {@render children?.()}
  </main>
{/if}

<style lang="sass">
  main
    display: grid
    grid-template-columns: repeat(1, 1fr)
    gap: 8px

    width: 100%
</style>
