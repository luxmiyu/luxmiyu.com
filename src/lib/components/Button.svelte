<script lang="ts">
  import { type Snippet } from 'svelte'

  let {
    children,

    onclick = () => {},
    href = undefined,
    target = '_blank',

    borderless = false,
    nopadding = false,
  }: {
    children?: Snippet

    onclick?: () => void
    href?: string
    target?: string

    borderless?: boolean
    nopadding?: boolean
  } = $props()
</script>

{#if href}
  <a {href} {target} class:borderless class:nopadding>
    {@render children?.()}
  </a>
{:else}
  <button {onclick} class:borderless class:nopadding>
    {@render children?.()}
  </button>
{/if}

<style lang="sass">
  a, button
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 2px

    // width: 100%
    max-width: 100%
    overflow: hidden

    box-shadow: 4px 4px 0px 0px var(--shadow)
    border: 1px solid var(--text)
    background: var(--card)
    color: var(--text)
    padding: 8px

    cursor: pointer
    user-select: none

    text-decoration: none
    font-weight: 400

    &.borderless
      border: none

    &.nopadding
      padding: 0

    &:hover
      background: var(--input)

      transform: translate(1px, 1px)
      box-shadow: 3px 3px 0px 0px var(--shadow)
    
    &:active
      background: var(--input-hover)

      transform: translate(2px, 2px)
      box-shadow: 2px 2px 0px 0px var(--shadow)
</style>
