<script lang="ts">
  import { page } from '$app/state'
  import { browser } from '$app/environment'
  import {
    Head,
    Header,
    Footer,
    Container,
    Input,
    Button,
    Columns,
    Text,
    Separate,
  } from '$lib/components'
  import { type Result, getResult } from './search'

  let value: string = $state('')
  let result: Result | null = $derived(getResult(value))

  function onEnter() {
    if (result && browser) {
      window.open(result.url, '_blank')
    }
  }

  $effect(() => {
    if (page.url.searchParams.has('bang')) {
      value = `!${page.url.searchParams.get('bang')!} `
      window.history.replaceState({}, '', window.location.pathname)
    }
  })
</script>

<Head title="luxmiyu → search" description="search with bangs" image="/preview/search.jpg" />

<Container fill>
  <Header title="search" description="search with bangs" />

  <Columns template="1fr 100px">
    <Input.Text bind:value focus {onEnter} />
    {#if result}
      <Button href={result.url} target="_blank">Search</Button>
    {:else}
      <Button disabled>Search</Button>
    {/if}

    <Text>
      {#if result}
        <p class="subtitle">{result.url}</p>
      {/if}

      <a class="subtitle" href="/bangs">browse all bangs</a>
    </Text>
  </Columns>

  <Footer />
</Container>
