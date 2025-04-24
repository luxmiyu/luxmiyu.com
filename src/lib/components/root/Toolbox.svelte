<script lang="ts">
  let { children } = $props()
</script>

<main>
  {@render children()}
</main>

<style lang="sass">
  main
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(128px, 1fr))
    gap: 8px

    width: 100%
</style>
