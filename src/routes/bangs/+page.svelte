<script lang="ts">
  import {
    Head,
    Header,
    Footer,
    Container,
    Text,
    Grid,
    Input,
    Button,
    Separate,
  } from '$lib/components'
  import { type CleanBang, cleanBangs } from './clean'

  let value = $state('')
  let count = $state(21)
  let page = $state(1)

  function match(bang: CleanBang): boolean {
    if (value === '') return true

    const matchString =
      `!${bang.bang} ${bang.name} ${bang.domain} ${bang.url} ${bang.category} ${bang.subcategory}`.toLowerCase()

    const splitValue = value.toLowerCase().split(/\s+/g)

    return splitValue.every((v) => matchString.includes(v))
  }

  let matchingBangs = $derived(cleanBangs.filter(match))
  let pages = $derived(Math.ceil(matchingBangs.length / count))
  let pagedBangs = $derived(matchingBangs.slice((page - 1) * count, page * count))

  function previousPage() {
    page--
    if (page < 1) page = pages
  }

  function nextPage() {
    page++
    if (page > pages) page = 1
  }

  function oninput() {
    page = Math.min(pages, Math.max(1, page))
  }
</script>

<Head title="luxmiyu → bangs" description="browse the bangs" image="/preview/bangs.jpg" />

<Container fill large>
  <Header title="bangs" description="browse the bangs" />

  <Grid>
    <Input.Text bind:value focus {oninput} />
  </Grid>

  <Text>
    <a class="subtitle" href="/search">search with bangs</a>
  </Text>

  <Grid minmax="320px" gap="4px">
    {#each pagedBangs as bang}
      <a class="bang" href="/search?bang={bang.bang}">
        <Separate>
          <h3>{bang.name}</h3>
          <p class="smol">!{bang.bang}</p>
        </Separate>
        <p class="smol">{bang.url}</p>
      </a>
    {/each}
  </Grid>

  <!-- <Grid columns="2">
    <Button onclick={previousPage}>Previous Page</Button>
    <Button onclick={nextPage}>Next Page</Button>
  </Grid>

  <Text>
    <p class="subtitle">Page {page} of {pages}</p>
  </Text> -->

  <Input.Paginator bind:page {pages} label />

  <Footer />
</Container>

<style lang="sass">
  .bang
    display: flex
    flex-direction: column
    gap: 4px

    width: 100%
    height: 64px

    color: var(--text)
    border: 1px solid var(--text-disabled)
    background: var(--card)
    padding: 8px

    text-decoration: none

    overflow: hidden
    word-break: break-all

    h3
      font-size: 14px
      font-weight: 450

    .smol
      color: var(--text-secondary)
      font-size: 11px
      font-weight: 300

    &:hover
      background: var(--input)
</style>
