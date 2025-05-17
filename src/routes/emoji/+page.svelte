<script lang="ts">
  import { Head, Header, Footer, Container, Text, Input, Button, Columns } from '$lib/components'
  import { convertText, convertArrow } from './emoji'

  let inputText = $state('')
  let inputArrows = $state('')

  let outputText = $derived(convertText(inputText))
  let outputArrows = $derived(convertArrow(inputArrows))
</script>

<Head
  title="luxmiyu → emoji"
  description="a quick text to emoji converter"
  image="/preview/emoji.jpg"
/>

<Container fill>
  <Header title="emoji" description="a quick text to emoji converter" />

  <Text>
    <h3>Letters</h3>
    <Columns template="1fr 120px">
      <Input.Text bind:value={inputText} />
      <Button onclick={() => navigator.clipboard.writeText(outputText)}>Copy Output</Button>
    </Columns>
    {#if outputText}
      <p>{outputText}</p>
    {/if}
    <h3>Arrows</h3>
    <Columns template="1fr 120px">
      <Input.Text bind:value={inputArrows} />
      <Button onclick={() => navigator.clipboard.writeText(outputArrows)}>Copy Output</Button>
    </Columns>
    {#if outputArrows}
      <p>{outputArrows}</p>
    {/if}
  </Text>

  <Footer />
</Container>

<style lang="sass">
  //
</style>
