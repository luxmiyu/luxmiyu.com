<script lang="ts">
  import Button from '../Button.svelte'

  let {
    url,
    icon,
    label,
  }: {
    url: string
    icon: string
    label: string
  } = $props()
</script>

<Button href={url}>
  <main>
    <img src={icon} alt={icon} />
    <p>{label}</p>
  </main>
</Button>

<style lang="sass">
  main
    display: flex
    justify-content: start
    align-items: center
    gap: 8px

    min-width: 150px
    width: 100%
    height: 100%
    font-weight: 400

    img
      width: 32px
      height: 32px
      aspect-ratio: 1 / 1
</style>
