<script lang="ts">
  import Button from '$lib/components/Button.svelte'
  import Icon from '$lib/components/Icon.svelte'

  let {
    icon,
    name,
  }: {
    icon: string
    name: string
  } = $props()
</script>

<Button href="/{name}" target="_self" nopadding>
  <main>
    <Icon name={icon} size="20px" />
    <p>{name}</p>
  </main>
</Button>

<style lang="sass">
  main
    display: flex
    flex-direction: row
    align-items: center
    justify-content: start
    padding-left: 8px
    gap: 8px

    width: 100%
    height: 42px

    overflow: hidden

    p
      text-align: center
      font-size: 14px
      white-space: nowrap
</style>
