<script lang="ts">
  import { Header, Footer, Container, Text, Input, Output } from '$lib/components'
  import { uwufy } from './uwu'

  let input = $state('')
  let output = $derived(uwufy(input))
</script>

<Container fill>
  <Header title="empty" description="an empty page" />

  <Text>
    <h3>tex to be uwufied</h3>
    <p class="subtitle">type smth in dis box</p>
    <Input.Textarea bind:value={input} width="100%" vertical />
    <p class="subtitle">an uwu wiww git da twanswated tex in dis otha box</p>
    <Output bind:value={output} width="100%" />
  </Text>

  <Footer />
</Container>
