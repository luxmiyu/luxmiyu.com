<script lang="ts">
  import { Head, Header, Footer, Container, Text, Input, Columns, Grid } from '$lib/components'
  import Emoji from './Emoji.svelte'
  import emojis from './emojis'

  let categories = $derived(Array.from(new Set(['search', ...emojis.map((e) => e.category)])))
  let category = $state('search')

  let search = $state('')

  function match(matchString: string): boolean {
    if (search === '') return true
    const splitSearch = search.toLowerCase().split(/\s+/g)
    return splitSearch.every((v) => matchString.includes(v))
  }

  let filtered = $derived.by(() => {
    if (category === 'search') {
      return emojis.filter((e) =>
        match(
          `${e.emoji} ${e.description} ${e.version} ${e.keywords.join(' ')} ${e.category} ${e.group} ${e.subgroup}`
        )
      )
    } else {
      return emojis.filter((e) => e.category === category)
    }
  })

  let count = $state(8 * 5)
  let page = $state(1)
  let pages = $derived(Math.ceil(filtered.length / count))
  let paged = $derived(filtered.slice((page - 1) * count, page * count))

  function clampPage() {
    page = Math.max(1, Math.min(pages, page))
  }
</script>

<Head title="luxmiyu → emoji" description="a simple emoji picker" image="/preview/emoji.jpg" />

<Container fill>
  <Header title="emoji" description="a simple emoji picker" />

  <Text>
    <Columns template={category === 'search' ? '160px 1fr' : '1fr'}>
      <Input.Select bind:value={category} width="100%" onchange={clampPage}>
        {#each categories as cat}
          <option value={cat}>{cat}</option>
        {/each}
      </Input.Select>
      {#if category === 'search'}
        <Input.Text bind:value={search} width="100%" focus oninput={clampPage} />
      {/if}
    </Columns>
  </Text>

  {#if category === 'search'}
    <Grid minmax="80px" gap="4px">
      {#each paged as emoji}
        <Emoji value={emoji.emoji} />
      {/each}
    </Grid>
  {:else}
    <Grid minmax="80px" gap="4px">
      {#each paged as emoji}
        <Emoji value={emoji.emoji} />
      {/each}
    </Grid>
  {/if}

  <Input.Paginator bind:page {pages} />

  <Footer />
</Container>

<style lang="sass">
  //
</style>
