<script lang="ts">
  import type { Snippet } from 'svelte'

  let { children }: { children: Snippet } = $props()
</script>

<div>
  {@render children?.()}
</div>

<style lang="sass">
  div
    width: 100%

    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 8px

    :global(h1)
      width: 100%
      font-size: 28px
      font-weight: 600

    :global(h2)
      width: 100%
      font-size: 20px
      font-weight: 500

    :global(h3)
      width: 100%
      font-size: 16px
      font-weight: 400

    :global(h4)
      width: 100%
      font-size: 13px
      font-weight: 400

    :global(p)
      width: 100%
      text-align: justify

    :global(p.subtitle)
      font-size: 12px
      color: var(--text-secondary)

    :global(p.center)
      text-align: center

    :global(a)
      text-decoration: none
      color: var(--text-secondary)

      &:hover
        text-decoration: underline
</style>
