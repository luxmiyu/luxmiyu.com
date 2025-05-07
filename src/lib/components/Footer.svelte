<script lang="ts">
  let {
    text = 'by luxmiyu',
  }: {
    text?: string
  } = $props()
</script>

<footer>
  <a href="/">{text}</a>
</footer>

<style lang="sass">
  footer
    display: flex
    justify-content: center
    width: 100%

    a
      text-decoration: none
      color: var(--text-secondary)
      font-size: 12px
      font-weight: 300

      &:hover
        text-decoration: underline
</style>
