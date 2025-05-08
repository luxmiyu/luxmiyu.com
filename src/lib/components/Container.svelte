<script lang="ts">
  import { type Snippet } from 'svelte'

  let {
    children,
    large = false,
    fill = false,
  }: {
    children?: Snippet
    large?: boolean
    fill?: boolean
  } = $props()
</script>

<main class:large class:fill>
  {@render children?.()}
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

    &.fill
      min-height: 100dvh
</style>
