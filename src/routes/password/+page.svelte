<script lang="ts">
  import {
    Head,
    Header,
    Footer,
    Container,
    Button,
    Copy,
    Input,
    Output,
    Grid,
    Separate,
    Text,
    Columns,
    Center,
  } from '$lib/components'

  let value: string = $state('')
  let length: number = $state(32)
  let lowercase: boolean = $state(true)
  let uppercase: boolean = $state(true)
  let numbers: boolean = $state(true)
  let symbols: boolean = $state(false)
  let spaces: boolean = $state(false)

  let pool = $derived.by(() => {
    let pool = ''
    if (lowercase) pool += 'abcdefghijklmnopqrstuvwxyz'
    if (uppercase) pool += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (numbers) pool += '0123456789'
    if (symbols) pool += '!@#$%^&*()[]{}'
    if (spaces) pool += ' '
    return pool
  })

  let combinations = $derived(pool.length ** length)

  function regenerate() {
    if (pool === '') {
      value = ''
      return
    }

    let result = ''
    for (let i = 0; i < length; i++) {
      result += pool[Math.floor(Math.random() * pool.length)]
    }

    if (spaces) {
      let spaced = ''

      for (let ch of result) {
        if (Math.random() < 0.1) spaced += ' '
        else spaced += ch
      }

      result = spaced
    }

    value = result
  }

  $effect(() => {
    regenerate()
  })
</script>

<Head
  title="luxmiyu → password"
  description="a simple password generator"
  image="/preview/password.jpg"
/>

<Container fill>
  <Header title="password" description="a simple password generator" />

  <Text>
    <Output {value} breakall />
    <Grid gap="2px">
      <Columns template="80px 1fr">
        <Center><p class="subtitle">Length: {length}</p></Center>
        <Input.Range bind:value={length} min={1} max={128} step={1} width="100%" />
      </Columns>
      <Separate>
        <Center><p class="subtitle">Use Lowercase Letters (a-z)</p></Center>
        <Input.Checkbox bind:checked={lowercase} />
      </Separate>
      <Separate>
        <Center><p class="subtitle">Use Uppercase Letters (A-Z)</p></Center>
        <Input.Checkbox bind:checked={uppercase} />
      </Separate>
      <Separate>
        <Center><p class="subtitle">Use Numbers (0-9)</p></Center>
        <Input.Checkbox bind:checked={numbers} />
      </Separate>
      <Separate>
        <Center><p class="subtitle">Use Symbols (!@#$%^&*)</p></Center>
        <Input.Checkbox bind:checked={symbols} />
      </Separate>
      <Separate>
        <Center><p class="subtitle">Use Spaces (&nbsp;&nbsp;&nbsp;)</p></Center>
        <Input.Checkbox bind:checked={spaces} />
      </Separate>
    </Grid>
    <p class="subtitle right">Combinations: {combinations}</p>
    <Grid columns="2">
      <Copy {value} />
      <Button onclick={regenerate}>Regenerate</Button>
    </Grid>
  </Text>

  <Footer />
</Container>

<style lang="sass">
  //
</style>
