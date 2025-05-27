<script lang="ts">
  import { Head, Header, Footer, Container, Grid, Output, Button, Copy } from '$lib/components'

  let generated: string = $state('')

  function reset() {
    generated = ''
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

<Head title="luxmiyu → keygen" description="random string generator" image="/preview/keygen.jpg" />

<Container fill>
  <Header title="keygen" description="random string generator" />
  <Output value={generated} />
  <Grid columns="2">
    <Button onclick={reset}>Reset</Button>
    <Copy disabled={generated === ''} value={generated} text="Copy to Clipboard" />
  </Grid>
  <Grid minmax="200px">
    <Button onclick={generateUUID}>Random UUID</Button>
    <Button onclick={generateUUIDnodash}>Random UUID (no dash)</Button>
    <Button onclick={generateAlphanumeric}>Random Alphanumeric</Button>
  </Grid>
  <Footer />
</Container>
