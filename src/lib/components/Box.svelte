<script lang="ts">
  let {
    children = () => {},
    borderless = false,
    nopadding = false,
  }: {
    children: () => any
    borderless?: boolean
    nopadding?: boolean
  } = $props()
</script>

<div class:borderless class:nopadding>
  {@render children()}
</div>

<style lang="sass">
  div
    width: 100%
    height: 100%

    box-shadow: 4px 4px 0px 0px var(--shadow)
    border: 1px solid var(--text)
    background: var(--card)
    color: var(--text)
    padding: 8px

    &.borderless
      border: none

    &.nopadding
      padding: 0
</style>
