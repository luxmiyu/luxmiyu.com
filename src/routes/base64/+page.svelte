<script lang="ts">
  import {
    Head,
    Header,
    Footer,
    Container,
    Input,
    Center,
    Button,
    Columns,
    Grid,
    Text,
  } from '$lib/components'

  let depth = $state(1)
  let original = $state('')
  let encoded = $state('')
  let last: 'original' | 'encoded' = 'original'

  function isValidCharacter(char: string): boolean {
    return char.length === 1 && char.charCodeAt(0) <= 255
  }

  function clean() {
    original = original.split('').filter(isValidCharacter).join('')
  }

  function clear() {
    original = ''
    encoded = ''
  }

  function encode(text: string, depth: number): string {
    let result = text
    for (let i = 0; i < depth; i++) {
      result = btoa(result)
    }
    return result
  }

  function decode(text: string, depth: number): string {
    let result = text
    for (let i = 0; i < depth; i++) {
      result = atob(result)
    }
    return result
  }

  function oninputOriginal() {
    encoded = encode(original, depth)
    last = 'original'
  }

  function oninputEncoded() {
    original = decode(encoded, depth)
    last = 'encoded'
  }

  function oninputDepth() {
    if (last === 'original') {
      encoded = encode(original, depth)
    } else {
      original = decode(encoded, depth)
    }
  }
</script>

<Head
  title="luxmiyu → base64"
  description="base64 encoder and decoder"
  image="/preview/base64.jpg"
/>

<Container fill>
  <Header title="base64" description="base64 encoder and decoder" />

  <Text>
    <h3>Original Text</h3>
    <Input.Textarea bind:value={original} width="100%" vertical oninput={oninputOriginal} />
    <Grid columns="3">
      <Button onclick={() => navigator.clipboard.writeText(original)}>Copy to clipboard</Button>
      <Button onclick={clear}>Clear Text</Button>
      <Button onclick={clean}>Filter Invalid</Button>
    </Grid>

    <h3>Encoded Text</h3>
    <Input.Textarea bind:value={encoded} width="100%" vertical oninput={oninputEncoded} />
    <Grid columns="2">
      <Button onclick={() => navigator.clipboard.writeText(encoded)}>Copy to clipboard</Button>
      <Button onclick={clear}>Clear Text</Button>
    </Grid>

    <Columns template="80px 1fr">
      <Center><p class="subtitle center">Depth: {depth}</p></Center>
      <Input.Range
        bind:value={depth}
        min={1}
        max={16}
        step={1}
        width="100%"
        oninput={oninputDepth}
      />
    </Columns>
  </Text>

  <Footer />
</Container>
