<script lang="ts">
  import '$lib/style/reset.css'

  import { page } from '$app/state'
  import { dev, browser } from '$app/environment'

  let { children, data } = $props()

  let light = $derived(data.theme === 'light')
</script>

<svelte:head>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
    rel="stylesheet"
  />

  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />

  <!-- metadata -->
  <meta name="keywords" content="luxmiyu, lux, miyu, dev" />
  <meta name="author" content="luxmiyu" />
  <link rel="canonical" href="https://luxmiyu.com{page.url.pathname}" />

  <!-- social media metadata -->
  <meta property="og:url" content="https://luxmiyu.com{page.url.pathname}" />
  <meta name="theme-color" content="#9dc1ec" />

  <!-- umami analytics -->
  {#if dev}
    <script
      defer
      src="https://umami.luxmiyu.com/script.js"
      data-website-id="d342ae40-963a-4871-a69b-421fff5beda8"
    ></script>
  {:else}
    <script
      defer
      src="https://umami.luxmiyu.com/script.js"
      data-website-id="8fc13be5-e7d4-4383-af6d-92ad3fed6eda"
    ></script>
  {/if}
</svelte:head>

<main class:light>
  {@render children()}
</main>

<style lang="sass">
  :global(*)
    box-sizing: border-box

    font-family: var(--font-family)
    font-weight: var(--font-weight)
    font-size: var(--font-size)

    line-height: 1

    scroll-behavior: smooth

  :global(body)
    --font-family: 'Rubik', sans-serif
    --font-weight: 300
    --font-size: 14px

    --text: #fafafa
    --text-secondary: #bababa
    --text-disabled: #5a5a5a
    --background: #1a1a1a
    --card: #2a2a2a
    --shadow: #3a3a3a
    --input: #3a3a3a
    --input-hover: #4a4a4a
    
    --background-dots: #222222

    --red: #e13e53
    --green: #00cc2f
    --blue: #0073de
    --yellow: #eb9e25

    --discord: #708ed6
    --discord-hover: #617ece

    --background-size: 10px 10px

    font-family: var(--font-family)
    font-weight: var(--font-weight)
    font-size: var(--font-size)

    color: var(--text)

    // plain background
    background: var(--background)
    background-image: var(--background-image)
    background-size: var(--background-size)
    background-color: var(--background)

    // dotted background
    background: var(--background)
    background-image: radial-gradient(var(--background-dots) 1.5px, transparent 1.5px)
    background-size: 10px 10px
    background-color: var(--background)

    &:has(main.light)
      --text: #1a1a1a
      --text-secondary: #5a5a5a
      --text-disabled: #8a8a8a
      --background: #fafafa
      --card: #eaeaea
      --shadow: #eaeaea
      --input: #d8d8d8
      --input-hover: #c8c8c8

      --background-dots: #f4f4f4

  main
    display: flex
    justify-content: center

    width: 100%
</style>
