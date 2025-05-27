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
    Copy,
    Grid,
  } from '$lib/components'

  let min = $state(0)
  let max = $state(100)
  let step = $state(1)
  let amount = $state(1)

  let value = $state('0')
  const history: string[] = $state([])

  let actualMax = $derived(max - ((max - min) % step))
  let decimals = $derived(step.toString().split('.')[1]?.length || 0)

  let actualAmount = $derived(Math.max(1, Math.floor(amount)))

  function reset() {
    if (value === '0' && history.length === 0) {
      min = 0
      max = 100
      step = 1
      amount = 1
    }

    value = '0'
    history.length = 0
  }

  function next(): string {
    const numberOfSteps = (actualMax - min) / step + 1
    const randomStep = Math.floor(Math.random() * numberOfSteps)
    return (min + randomStep * step).toFixed(decimals)
  }

  function generate() {
    amount = Math.floor(amount)
    if (amount < 1) amount = 1

    if (actualAmount === 1) {
      value = next()
      history.push(value)
    } else {
      let array: string[] = []
      for (let i = 0; i < actualAmount; i++) {
        array.push(next())
      }
      value = `[${array.join(', ')}]`
    }
  }

  let [fontSize, fontWeight] = $derived.by(() => {
    if (value.length > 8192) return ['8px', '300']
    if (value.length > 2048) return ['12px', '350']
    if (value.length > 512) return ['18px', '400']
    if (value.length > 128) return ['24px', '400']
    if (value.length > 64) return ['32px', '400']
    if (value.length > 32) return ['50px', '450']
    if (value.length > 16) return ['64px', '450']
    return ['80px', '500']
  })
</script>

<Head
  title="luxmiyu → rng"
  description="a simple random number generator"
  image="/preview/rng.jpg"
/>

<Container fill>
  <Header title="rng" description="a simple random number generator" />

  <Text>
    <Output bind:value center minHeight="128px" {fontSize} {fontWeight} />
    {#if actualAmount === 1}
      <p class="subtitle center">History: {history.length > 0 ? history.join(', ') : '-'}</p>
    {/if}

    <Columns template="50px 1fr">
      <Center><p class="subtitle center">min</p></Center>
      <Input.Number bind:value={min} min={0} max={99999} step={1} />

      <Center><p class="subtitle center">max</p></Center>
      <Input.Number bind:value={max} min={0} max={99999} step={1} />

      <Center><p class="subtitle center">step</p></Center>
      <Input.Number bind:value={step} min={0} max={99999} step={1} />

      <Center><p class="subtitle center">#</p></Center>
      <Input.Number bind:value={amount} min={1} max={99999} step={1} />
    </Columns>

    <p class="subtitle center">
      Generate {actualAmount} random number{amount === 1 ? '' : 's'} between {min} and
      {actualMax.toFixed(decimals)} (inclusive) with a step of {step}
    </p>

    <Grid>
      <Button onclick={generate}>Generate</Button>
      <Grid columns="2">
        <Button onclick={reset}>Reset</Button>
        <Copy {value} />
      </Grid>
    </Grid>
  </Text>

  <Footer />
</Container>
