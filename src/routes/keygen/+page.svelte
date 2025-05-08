<script lang="ts">
  import { Header, Footer, Container, Grid, Output, Button } from '$lib/components'

  let generated: string = $state('')

  function reset() {
    generated = ''
  }

  function copy() {
    navigator.clipboard.writeText(generated)
    alert('Copied to clipboard')
  }

  function generateUUID() {
    generated = crypto.randomUUID()
  }

  function generateUUIDnodash() {
    const uuid = crypto.randomUUID()
    const uuidv4 = uuid.replace(/-/g, '')
    generated = uuidv4
  }

  function generateAlphanumeric() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const length = 32
    let result = ''

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    generated = result
  }
</script>

<Container fill>
  <Header title="keygen" description="Random string generator" />
  <Output value={generated} />
  <Grid columns="2">
    <Button onclick={reset}>Reset</Button>
    <Button onclick={copy} disabled={generated === ''}>Copy to Clipboard</Button>
  </Grid>
  <Grid minmax="200px">
    <Button onclick={generateUUID}>Random UUID</Button>
    <Button onclick={generateUUIDnodash}>Random UUID (no dash)</Button>
    <Button onclick={generateAlphanumeric}>Random Alphanumeric</Button>
  </Grid>
  <Footer />
</Container>
