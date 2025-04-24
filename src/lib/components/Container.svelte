<script lang="ts">
  let {
    children = () => {},
    large = false,
  }: {
    children: () => any
    large?: boolean
  } = $props()
</script>

<main class:large>
  {@render children()}
</main>

<style lang="sass">
  main
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 8px
    padding: 8px

    width: 100%
    max-width: 727px

    overflow: hidden

    &.large
      max-width: 1200px
</style>
