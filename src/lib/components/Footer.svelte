<script lang="ts">
  let {
    source = true,
    discord = true,

    extra = '',
    extraURL = '',
  }: {
    source?: boolean
    discord?: boolean

    extra?: string
    extraURL?: string
  } = $props()
</script>

<footer>
  <p>
    <a href="/" target="_self">by luxmiyu</a>

    {#if source}
      · <a href="https://github.com/luxmiyu/luxmiyu.com" target="_blank">source code</a>
    {/if}

    {#if discord}
      · <a href="https://discord.gg/komimau" target="_blank">discord server</a>
    {/if}

    {#if extra && extraURL}
      · <a href={extraURL} target="_blank">{extra}</a>
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
    height: 16px

    p, a
      text-decoration: none
      color: var(--text-secondary)
      font-size: 12px
      font-weight: 300

    a:hover
        text-decoration: underline
</style>
