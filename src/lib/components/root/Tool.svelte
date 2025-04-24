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
    <Icon name={icon} size="24px" />
    <p>{name}</p>
  </main>
</Button>

<style lang="sass">
  main
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    gap: 6px

    width: 100%
    height: 72px

    overflow: hidden

    p
      width: 100%
      text-align: center
      font-size: 14px
      white-space: nowrap
</style>
