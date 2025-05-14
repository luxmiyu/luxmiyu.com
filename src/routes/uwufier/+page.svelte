<script lang="ts">
  import { Header, Footer, Container, Text, Input, Output, Grid, Button } from '$lib/components'
  import { uwufy } from './uwu'

  let input = $state('')
  let output = $derived(uwufy(input))

  function copy() {
    navigator.clipboard.writeText(output)
    alert('Copied to clipboard')
  }

  function reset() {
    input = ''
  }
</script>

<Container fill>
  <Header title="uwufier" description="can uwu uwufy me" />

  <Text>
    <h3>tex to be uwufied</h3>
    <p class="subtitle">type smth in dis box</p>
    <Input.Textarea bind:value={input} width="100%" vertical focus />
    <p class="subtitle">an uwu wiww git da twanswated tex in dis otha box</p>
    <Output bind:value={output} width="100%" />
    <Grid columns="2">
      <Button onclick={copy} disabled={!output}>copi tex</Button>
      <Button onclick={reset}>delet tex</Button>
    </Grid>
  </Text>

  <Footer />
</Container>
