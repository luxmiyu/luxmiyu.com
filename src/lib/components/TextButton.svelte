<script lang="ts">
  import { browser } from '$app/environment'
  import { type Snippet } from 'svelte'

  let {
    children,

    onclick = () => {},
    onpointerdown = () => {},

    subtitle = false,
    disabled = false,
    width = 'auto',

    background = undefined,
    color = undefined,

    keybind = undefined,

    type = 'button',
  }: {
    children?: Snippet

    onclick?: () => void
    onpointerdown?: () => void

    subtitle?: boolean
    disabled?: boolean
    width?: string

    background?: string
    color?: string

    keybind?: string

    type?: 'button' | 'submit' | 'reset'
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

<button
  {onclick}
  {onpointerdown}
  style:width
  {disabled}
  style:background
  style:color
  {type}
  class:subtitle
>
  {@render children?.()}
</button>

<style lang="sass">
  button
    appearance: none
    border: none
    background: none
    color: var(--text-secondary)
    cursor: pointer

    font-family: var(--font-family)
    font-weight: var(--font-weight)
    font-size: var(--font-size)

    text-decoration: none

    &.subtitle
      font-size: 12px

    &:hover
      text-decoration: underline
</style>
