<script lang="ts">
  let {
    source = true,
    discord = true,
  }: {
    source?: boolean
    discord?: boolean
  } = $props()
</script>

<footer>
  <p>
    <a href="/">by luxmiyu</a>

    {#if source}
      · <a href="https://github.com/luxmiyu/luxmiyu.com" target="_blank">source code</a>
    {/if}

    {#if discord}
      · <a href="https://discord.gg/komimau" target="_blank">discord server</a>
    {/if}
  </p>
</footer>

<style lang="sass">
  footer
    display: flex
    justify-content: center
    align-items: center
    gap: 8px

    width: 100%

    p, a
      text-decoration: none
      color: var(--text-secondary)
      font-size: 12px
      font-weight: 300

    a:hover
        text-decoration: underline
</style>
