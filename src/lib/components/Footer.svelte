<script lang="ts">
  import { onMount } from 'svelte'

  interface FooterLink {
    href: string
    label: string
  }

  let {
    source = true,
    discord = true,

    extras = [],
  }: {
    source?: boolean
    discord?: boolean

    extras?: FooterLink[]
  } = $props()

  const links: FooterLink[] = $state([])

  onMount(() => {
    links.length = 0

    if (source)
      links.push({
        href: 'https://github.com/luxmiyu/luxmiyu.com',
        label: 'source code',
      })

    if (discord)
      links.push({
        href: 'https://discord.gg/komimau',
        label: 'discord server',
      })
  })
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

    {#each extras as { href, label }}
      · <a {href} target="_blank">{label}</a>
    {/each}
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
