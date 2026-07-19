<script lang="ts">
  import { type Snippet } from 'svelte'

  let {
    children,
    gap = '8px',
  }: {
    children?: Snippet
    gap?: string
  } = $props()
</script>

<main style:gap>
  {@render children?.()}
</main>

<style lang="sass">
  main
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    flex-wrap: wrap
    gap: 8px
    width: 100%

    :global(> *)
      width: auto
      flex-grow: 1
</style>
