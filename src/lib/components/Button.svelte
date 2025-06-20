<script lang="ts">
  import { browser } from '$app/environment'
  import { type Snippet } from 'svelte'

  let {
    children,

    onclick = () => {},
    onpointerdown = () => {},
    href = undefined,
    target = '_blank',
    rel = undefined,

    borderless = false,
    nopadding = false,
    disabled = false,
    nested = false,
    selected = false,
    width = 'auto',

    background = undefined,
    color = undefined,

    keybind = undefined,
  }: {
    children?: Snippet

    onclick?: () => void
    onpointerdown?: () => void
    href?: string
    target?: string
    rel?: string

    borderless?: boolean
    nopadding?: boolean
    disabled?: boolean
    nested?: boolean
    selected?: boolean
    width?: string

    background?: string
    color?: string

    keybind?: string
  } = $props()

  function listener(e: KeyboardEvent) {
    if (e.code === keybind) onclick()
  }

  $effect(() => {
    if (browser && keybind) {
      document.addEventListener('keydown', listener)
    }

    return () => document.removeEventListener('keydown', listener)
  })
</script>

{#if href}
  <a
    {href}
    {target}
    {rel}
    class:borderless
    class:nopadding
    class:nested
    class:selected
    style:width
    style:background
    style:color
  >
    {@render children?.()}
  </a>
{:else}
  <button
    {onclick}
    {onpointerdown}
    class:borderless
    class:nopadding
    class:nested
    class:selected
    style:width
    {disabled}
    style:background
    style:color
  >
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

    &:disabled
      cursor: not-allowed
      color: var(--text-disabled)
      background: var(--card)
      border: 1px solid var(--text-disabled)
      box-shadow: 4px 4px 0px 0px var(--shadow)

      &:hover
        transform: translate(0px, 0px)
        box-shadow: 4px 4px 0px 0px var(--shadow)

    &.nested
      box-shadow: none
      border: none
      background: var(--card)
      border-radius: 2px

      &.selected
        background: var(--input)

      &:hover
        transform: translate(0px, 0px)
        box-shadow: none

        background: var(--input)

      &:active
        transform: translate(0px, 0px)
        box-shadow: none

        background: var(--input-hover)

      &:disabled
        cursor: not-allowed
        color: var(--text-disabled)
        background: var(--input)
        border: none
        box-shadow: none

        &:hover
          transform: translate(0px, 0px)
          box-shadow: none
</style>
