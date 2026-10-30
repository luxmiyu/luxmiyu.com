<script lang="ts">
  import { onMount } from 'svelte'
  import { Head, Header, Footer, Container, Text, Input } from '$lib/components'

  let query: string = $state('')
  let definitions: string[] = $state([])

  let lastQuery = ''

  onMount(() => {
    const interval = setInterval(() => {
      if (query === lastQuery) return
      lastQuery = query
      definitions = []

      if (query.length > 1) {
        const current = query
        fetch(`https://scrabble.luxmiyu.com/api/definitions/${current}`)
          .then((response) => response.json())
          .then((json) => {
            if (current === lastQuery) definitions = json
          })
      }
    }, 1000)

    return () => clearInterval(interval)
  })
</script>

<Head
  title="luxmiyu → scrabble"
  description="The CSW24 wordlist with Wiktionary definitions"
  image="/preview/scrabble.jpg"
/>

<Container fill>
  <Header title="scrabble" description="The CSW24 wordlist with Wiktionary definitions" />

  <Input.Text bind:value={query} width="100%" focus placeholder="Search for a word..." />

  <Text>
    {#if definitions.length > 0}
      {#each definitions as definition}
        <p class="subtitle">{definition}</p>
      {/each}
    {:else}
      <p class="subtitle">...</p>
    {/if}
  </Text>

  <Footer />
</Container>

<style lang="sass">
  //
</style>
