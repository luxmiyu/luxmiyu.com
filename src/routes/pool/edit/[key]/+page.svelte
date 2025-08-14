<script lang="ts">
  import { enhance } from '$app/forms'
  import {
    Head,
    Header,
    Footer,
    Container,
    Text,
    Input,
    Button,
    Grid,
    Output,
    Columns,
    Copy,
    Separate,
  } from '$lib/components'
  import { dev } from '$app/environment'
  import { redirect } from '@sveltejs/kit'

  let { data } = $props()
  let pool = $derived(data.pool)

  let title = $state('')
  let description = $state('')
  let csv = $state('')

  let descriptionLines = $derived(description.split('\n').length)
  let csvLines = $derived(csv.split('\n').length)

  $effect(() => {
    title = pool.title
    description = pool.description
    csv = data.csv

    return () => {}
  })

  let updating = $state(false)

  const baseURL = dev ? 'http://localhost:5173' : 'https://luxmiyu.com'
  let viewURL = $derived(`${baseURL}/pool/${pool.id}`)
  let editURL = $derived(`${baseURL}/pool/edit/${pool.id}-${pool.key}`)
</script>

<Head title="Editing {pool.title}" description="Editing {pool.title}" image={'/preview/pool.jpg'} />

<Container fill>
  <Text>
    <Grid>
      <h1>Editing - {pool.title}</h1>

      <h4>Links</h4>
      <Columns template="1fr 160px">
        <Input.Text value={viewURL} disabled />
        <Copy value={viewURL} text="Copy View URL" />
        <Input.Text value={editURL} disabled />
        <Copy value={editURL} text="Copy Edit URL" />
      </Columns>
      <Grid columns="2">
        <Button
          href="/pool/regenerate?id={pool.id}&key={pool.key}"
          target="_self"
          onclick={(e) => {
            if (!confirm('Are you sure you want to regenerate both pool URLs?')) {
              e.preventDefault()
            }
          }}
        >
          Regenerate URLs
        </Button>
        <form
          action="?/delete"
          method="POST"
          onsubmit={(e) => {
            if (!confirm('Are you sure you want to delete this pool?')) {
              e.preventDefault()
            }
          }}
        >
          <input type="hidden" name="id" value={pool.id} />
          <input type="hidden" name="key" value={pool.key} />
          <Button width="100%" type="submit">Delete Pool</Button>
        </form>
      </Grid>
      <p class="subtitle">Save your Edit URL so you don't lose access to this pool!</p>

      <h4>Title</h4>
      <Input.Text bind:value={title} placeholder="My New Tournament"></Input.Text>
      <h4>Description</h4>
      <Input.Textarea
        bind:value={description}
        placeholder="This is the description of my new tournament. It can have multiple lines and use *markdown*.

> This is a quote."
        monospace
        vertical
        rows={descriptionLines + 6}
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
        rows={csvLines + 1}
      ></Input.Textarea>
      <p class="subtitle syntax">Syntax: Category,CT1,#ffffff,5231502,EZDT</p>

      <Grid>
        <form
          method="POST"
          action="?/update"
          use:enhance={() => {
            updating = true
            return async ({ update }) => {
              await update()
              updating = false
            }
          }}
        >
          <input type="hidden" name="id" value={pool.id} />
          <input type="hidden" name="key" value={pool.key} />
          <input type="hidden" name="title" value={title} />
          <input type="hidden" name="description" value={description} />
          <input type="hidden" name="csv" value={csv} />
          <Button width="100%" type="submit">{updating ? 'Updating...' : 'Update'}</Button>
        </form>
      </Grid>

      <Separate>
        <p class="subtitle">Last updated: {pool.updated.split('T').join(' ').split('.')[0]}</p>
        <p class="subtitle right"><a href="/pool/{pool.id}" target="_blank">view pool</a></p>
      </Separate>
    </Grid>
  </Text>

  <Footer />
</Container>

<style lang="sass">
  .syntax
    font-family: monospace
</style>
