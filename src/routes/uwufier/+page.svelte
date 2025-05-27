<script lang="ts">
  import {
    Head,
    Header,
    Footer,
    Container,
    Text,
    Input,
    Output,
    Grid,
    Button,
    Copy,
  } from '$lib/components'
  import { uwufy } from './uwu'

  let input = $state('')
  let output = $derived(uwufy(input))

  function reset() {
    input = ''
  }
</script>

<Head title="luxmiyu → uwufier" description="can uwu uwufy me" image="/preview/uwufier.jpg" />

<Container fill>
  <Header title="uwufier" description="can uwu uwufy me" />

  <Text>
    <h3>tex to be uwufied</h3>
    <p class="subtitle">type smth in dis box</p>
    <Input.Textarea bind:value={input} width="100%" vertical focus />
    <p class="subtitle">an uwu wiww git da twanswated tex in dis otha box</p>
    <Output bind:value={output} width="100%" />
    <Grid columns="2">
      <Copy disabled={!output} value={output} text="copi text" confirmText="copied!" />
      <Button onclick={reset}>delet tex</Button>
    </Grid>
  </Text>

  <Footer />
</Container>
