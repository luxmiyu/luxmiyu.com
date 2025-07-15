<script lang="ts">
  import type { Snippet } from 'svelte'

  let {
    children,
    gap = '8px',
    card = false,
    lineHeight = '1.0',
  }: {
    children: Snippet
    gap?: string
    card?: boolean
    lineHeight?: string
  } = $props()
</script>

<div style:gap class:card style:line-height={lineHeight}>
  {@render children?.()}
</div>

<style lang="sass">
  div
    width: 100%

    display: flex
    flex-direction: column
    align-items: start
    gap: 8px

    &.card
      background: var(--background)
      padding: 8px
      border-radius: 2px
      border: 1px solid var(--text-secondary)

    :global(img)
      max-width: 100%
      
    :global(img.center)
      margin-left: auto
      margin-right: auto
      display: block

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

    :global(strong)
      font-weight: 500

    :global(em)
      font-style: italic

    :global(hr)
      width: 100%
      height: 0
      border: none
      border-bottom: var(--text-secondary) solid 1px

    :global(a:hover)
      text-decoration: underline
      cursor: pointer

    :global(p.subtitle), :global(a.subtitle)
      font-size: 12px
      color: var(--text-secondary)

    :global(p.center), :global(a.center)
      text-align: center

    :global(p.right), :global(a.right)
      text-align: right

    :global(a)
      text-decoration: none
      color: var(--text-secondary)

      &:hover
        text-decoration: underline

    :global(code)
      background: var(--card)
      padding: 2px 4px
      border-radius: 2px
      font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace

    :global(pre)
      width: 100%
      font-family: monospace
      padding: 16px
      border-radius: 4px

    :global(pre code)
      background: none

    :global(table)
      width: 100%
      border: 1px solid var(--text-secondary)
      border-collapse: collapse
      background: var(--card)

    :global(thead)
      background-color: var(--input-hover)
      color: var(--text)
      font-weight: 500

    :global(th), :global(td)
      padding: 9px
      border: 1px solid var(--text-secondary)

    :global(th)
      text-transform: uppercase
      letter-spacing: 0.03em

    :global(ul), :global(ol)
      padding-left: 25px
      line-height: 1.25

    :global(ul li)
      list-style-type: disc

    :global(ol li)
      list-style-type: decimal

    /* rehype-callouts */
    :global(.callout)
      margin: 4px 0
</style>
