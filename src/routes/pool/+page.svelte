<script lang="ts">
  import {
    Head,
    Header,
    Footer,
    Container,
    Grid,
    Input,
    Button,
    Text,
    TextButton,
    Center,
  } from '$lib/components'
  import presets from './presets'

  let title = $state('')
  let description = $state('')
  let csv = $state('')

  let json = $derived(
    JSON.stringify({ title, ...(description.length > 0 && { description }), csv })
  )
  let href = $derived(`/pool/new?json=${encodeURIComponent(json)}`)

  function clear() {
    title = ''
    description = ''
    csv = ''
  }

  function fill(newTitle: string, newDescription: string, newCSV: string) {
    title = newTitle
    description = newDescription
    csv = newCSV
  }
</script>

<Head
  title="luxmiyu → pool"
  description="an osu tournament map pool displayer"
  image="/preview/pool.jpg"
/>

<Container fill>
  <Header title="pool" description="an osu tournament map pool displayer" />

  <Text>
    <Grid>
      <Center>
        <span class="subtitle">Presets:</span>
        {#each presets as preset}
          <TextButton onclick={() => fill(preset.title, preset.description, preset.csv)} subtitle>
            {preset.title}
          </TextButton>
        {/each}
        <TextButton onclick={clear} subtitle>Clear</TextButton>
      </Center>

      <h4>Title</h4>
      <Input.Text bind:value={title} placeholder="My New Tournament"></Input.Text>
      <h4>Description</h4>
      <Input.Textarea
        bind:value={description}
        placeholder="This is the description of my new tournament. It can have multiple lines and use *markdown*.

> This is a quote."
        monospace
        vertical
      ></Input.Textarea>
      <h4>Maps (max 50)</h4>
      <Input.Textarea
        bind:value={csv}
        placeholder="Nomod,NM 1,#fafafa,4881501,NM
Nomod,NM 2,#fafafa,4881869,NM
Nomod,NM 3,#fafafa,4881614,NM
Easy Doubletime,EZDT,#5aba93,4881668,EZDT
Doubletime,DT 1,#8cafe3,4880978,DT
Doubletime,DT 2,#8cafe3,4881745,DT
Freemod,FM 1,#a98ce3,4881757,-
Tiebreaker,TB,#eeaad5,4881796,-"
        monospace
        vertical
      ></Input.Textarea>
      <p class="subtitle syntax">Syntax: Category,CT1,#ffffff,5231502,EZDT</p>
      {#if title.length === 0 || description.length === 0 || csv.length === 0}
        <Button disabled>Create New Map Pool</Button>
      {:else}
        <Button {href} target="_self">Create New Map Pool</Button>
      {/if}
    </Grid>
  </Text>

  <Footer />
</Container>

<style lang="sass">
  .syntax
    font-family: monospace
</style>
