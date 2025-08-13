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

    type = 'button',
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
  class:borderless
  class:nopadding
  class:nested
  class:selected
  style:width
  {disabled}
  style:background
  style:color
  {type}
>
  {@render children?.()}
</button>

<style lang="sass">
  //
</style>
