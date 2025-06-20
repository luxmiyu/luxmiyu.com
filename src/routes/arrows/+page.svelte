<script lang="ts">
  import {
    Head,
    Header,
    Footer,
    Container,
    Text,
    Input,
    Button,
    Columns,
    Copy,
  } from '$lib/components'
  import { convertText, convertArrow } from './emoji'

  let inputText = $state('')
  let inputArrows = $state('')

  let outputText = $derived(convertText(inputText))
  let outputArrows = $derived(convertArrow(inputArrows))
</script>

<Head
  title="luxmiyu → arrows"
  description="a quick text to arrows converter"
  image="/preview/arrows.jpg"
/>

<Container fill>
  <Header title="arrows" description="a quick text to arrows converter" />

  <Text>
    <h3>Letters</h3>
    <Columns template="1fr 120px">
      <Input.Text bind:value={inputText} />
      <Copy disabled={outputText.length === 0} value={outputText} text="Copy Output" />
    </Columns>
    {#if outputText}
      <p>{outputText}</p>
    {/if}
    <h3>Arrows</h3>
    <Columns template="1fr 120px">
      <Input.Text bind:value={inputArrows} />
      <Copy disabled={outputArrows.length === 0} value={outputArrows} text="Copy Output" />
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
