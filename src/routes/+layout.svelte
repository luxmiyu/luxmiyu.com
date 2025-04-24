<script lang="ts">
  import '$lib/style/reset.css'

  import { page } from '$app/state'
  import { dev, browser } from '$app/environment'

  let { children } = $props()

  let light = true
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
  <meta name="theme-color" content="#bfc487" />

  <!-- umami analytics -->
  {#if dev}
    <script
      defer
      src="https://umami.luxmiyu.com/script.js"
      data-website-id="d342ae40-963a-4871-a69b-421fff5beda8"
    ></script>
  {:else}
    <!-- <script
      defer
      src="https://umami.luxmiyu.com/script.js"
      data-website-id="09a51d89-f0cd-417d-8d33-82984d74e8ee"
    ></script> -->
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

    --red: #e13e53
    --green: #00cc2f
    --blue: #0073de
    --yellow: #eb9e25

    --discord: #708ed6
    --discord-hover: #617ece

    --background-size: 10px 10px

    color: var(--text)
    background: var(--background)
    background-color: var(--background)
    background-image: var(--background-image)
    background-size: var(--background-size)

    font-family: var(--font-family)
    font-weight: var(--font-weight)
    font-size: var(--font-size)

    scroll-behavior: smooth

    &.light
      --text: #1a1a1a
      --text-secondary: #5a5a5a
      --text-disabled: #8a8a8a
      --background: #fafafa
      --card: #eaeaea
      --shadow: #eaeaea
      --input: #d8d8d8
      --input-hover: #c8c8c8

  main
    display: flex
    justify-content: center

    width: 100%
</style>
