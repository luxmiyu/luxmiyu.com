<script lang="ts">
  import { Head, Header, Footer, Container, Input, Button, Grid, Text, Copy } from '$lib/components'

  let original = $state('')
  let binary = $state('')
  let hexadecimal = $state('')

  let disabled = $derived(original.length === 0)

  function copy(str: string) {
    navigator.clipboard.writeText(str)
    alert('Copied to clipboard')
  }

  function reset() {
    original = ''
    binary = ''
    hexadecimal = ''
  }

  function oninputOriginal() {
    binary = original
      .split('')
      .map((char) => char.charCodeAt(0).toString(2))
      .join(' ')
    hexadecimal = original
      .split('')
      .map((char) => char.charCodeAt(0).toString(16))
      .join(' ')
  }

  function oninputBinary() {
    original = binary
      .split(' ')
      .map((char) => String.fromCharCode(parseInt(char, 2)))
      .join('')
    hexadecimal = original
      .split('')
      .map((char) => char.charCodeAt(0).toString(16))
      .join(' ')
  }

  function oninputHexadecimal() {
    original = hexadecimal
      .split(' ')
      .map((char) => String.fromCharCode(parseInt(char, 16)))
      .join('')
    binary = original
      .split('')
      .map((char) => char.charCodeAt(0).toString(2))
      .join(' ')
  }
</script>

<Head
  title="luxmiyu → binary"
  description="A simple text to binary converter"
  image="/preview/binary.jpg"
/>

<Container fill>
  <Header title="binary" description="a simple text to binary converter" />

  <Text>
    <h3>Original Text</h3>
    <Input.Textarea bind:value={original} width="100%" vertical oninput={oninputOriginal} />
    <Grid columns="2">
      <Copy {disabled} value={original} text="Copy to clipboard" />
      <Button {disabled} onclick={reset}>Reset</Button>
    </Grid>

    <h3>Binary</h3>
    <Input.Textarea bind:value={binary} width="100%" vertical oninput={oninputBinary} />
    <Grid columns="2">
      <Copy {disabled} value={binary} text="Copy to clipboard" />
      <Button {disabled} onclick={reset}>Reset</Button>
    </Grid>

    <h3>Hexadecimal</h3>
    <Input.Textarea bind:value={hexadecimal} width="100%" vertical oninput={oninputHexadecimal} />
    <Grid columns="2">
      <Copy {disabled} value={hexadecimal} text="Copy to clipboard" />
      <Button {disabled} onclick={reset}>Reset</Button>
    </Grid>
  </Text>

  <Footer />
</Container>
