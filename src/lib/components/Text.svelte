<script lang="ts">
  import type { Snippet } from 'svelte'

  let {
    children,
    gap = '8px',
  }: {
    children: Snippet
    gap?: string
  } = $props()
</script>

<div style:gap>
  {@render children?.()}
</div>

<style lang="sass">
  div
    width: 100%

    display: flex
    flex-direction: column
    align-items: start
    gap: 8px

    :global(h1)
      width: 100%
      font-size: 28px
      font-weight: 600
      margin-top: 8px

    :global(h2)
      width: 100%
      font-size: 20px
      font-weight: 500
      margin-top: 6px

    :global(h3)
      width: 100%
      font-size: 16px
      font-weight: 400
      margin-top: 4px

    :global(h4)
      width: 100%
      font-size: 13px
      font-weight: 400
      margin-top: 4px

    :global(p)
      width: 100%
      text-align: justify

    :global(a:hover)
      text-decoration: underline
      cursor: pointer

    :global(p.subtitle), :global(a.subtitle)
      font-size: 12px
      color: var(--text-secondary)

    :global(p.center), :global(a.center)
      text-align: center

    :global(a)
      text-decoration: none
      color: var(--text-secondary)

      &:hover
        text-decoration: underline
</style>
