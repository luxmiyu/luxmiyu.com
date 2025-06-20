<script lang="ts">
  import { type Snippet } from 'svelte'

  let {
    children,
    value = $bindable(),
    width = 'auto',
    onchange,
  }: {
    children?: Snippet
    value: string
    width?: string
    onchange?: () => void
  } = $props()
</script>

<select bind:value style:width {onchange}>
  {@render children?.()}
</select>

<style lang="sass">
  select
    width: auto
    height: 36px

    border: 1px solid var(--text-disabled)
    background: var(--card)
    color: var(--text)
    padding: 8px
</style>
