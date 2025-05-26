<script lang="ts">
  import {
    Head,
    Header,
    Footer,
    Container,
    Text,
    Input,
    Output,
    Columns,
    Center,
    Button,
    Grid,
  } from '$lib/components'

  let min = $state(0)
  let max = $state(100)
  let step = $state(1)

  let value = $state('0')
  const history: string[] = $state([])

  let actualMax = $derived(max - ((max - min) % step))
  let decimals = $derived(step.toString().split('.')[1]?.length || 0)

  function reset() {
    if (value === '0' && history.length === 0) {
      min = 0
      max = 100
      step = 1
    }

    value = '0'
    history.length = 0
  }

  function generate() {
    const numberOfSteps = (actualMax - min) / step + 1
    const randomStep = Math.floor(Math.random() * numberOfSteps)
    value = (min + randomStep * step).toFixed(decimals)
    history.push(value)
  }
</script>

<Head
  title="luxmiyu → rng"
  description="a simple random number generator"
  image="/preview/rng.jpg"
/>

<Container fill>
  <Header title="rng" description="a simple random number generator" />

  <Text>
    <Output bind:value height="128px" center fontSize="80px" fontWeight="500" />
    <p class="subtitle center">History: {history.length > 0 ? history.join(', ') : '-'}</p>

    <Columns template="50px 1fr">
      <Center><p class="subtitle center">min</p></Center>
      <Input.Number bind:value={min} min={0} max={99999} step={1} />

      <Center><p class="subtitle center">max</p></Center>
      <Input.Number bind:value={max} min={0} max={99999} step={1} />

      <Center><p class="subtitle center">step</p></Center>
      <Input.Number bind:value={step} min={0} max={99999} step={1} />
    </Columns>

    <p class="subtitle center">
      Generate a random number between {min} and
      {actualMax.toFixed(decimals)} (inclusive) with a step of {step}
    </p>

    <Grid>
      <Button onclick={generate}>Generate</Button>
      <Button onclick={reset}>Reset</Button>
    </Grid>
  </Text>

  <Footer />
</Container>
