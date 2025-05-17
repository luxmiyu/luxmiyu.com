<script lang="ts">
  import { browser } from '$app/environment'
  import {
    Head,
    Header,
    Footer,
    Container,
    Text,
    Output,
    Input,
    Button,
    Rows,
  } from '$lib/components'

  const minimumTaps = 3

  let rhythm = $state('1')

  let startTime = $state(0)
  let endTime = $state(0)
  let totalTaps = $state(0)

  let bpm = $derived.by(() => {
    if (totalTaps < minimumTaps) return 0
    return ((totalTaps - 1) / ((endTime - startTime) / 1000)) * (60 / Number(rhythm))
  })

  let status = $derived.by(() => {
    const remaining = minimumTaps - totalTaps

    if (remaining === minimumTaps) return 'Waiting for taps...'
    if (remaining > 0) return `Tap ${remaining} more time${remaining > 1 ? 's' : ''}`

    const mspt = ((endTime - startTime) / (totalTaps - 1)).toFixed(1)
    const taps = ((totalTaps - 1) / ((endTime - startTime) / 1000)).toFixed(1)

    return `${totalTaps} taps at ${mspt}ms per tap or ${taps} taps per second`
  })

  function tap() {
    if (startTime === 0) {
      startTime = Date.now()
    }

    endTime = Date.now()
    totalTaps++
  }

  function reset() {
    startTime = 0
    endTime = 0
    totalTaps = 0
  }

  if (browser) {
    document.addEventListener('keydown', (event) => {
      const isAlphabetic = event.code.startsWith('Key') && event.code.length === 4
      const isEnter = ['Space', 'Enter', 'NumpadEnter'].includes(event.code)

      if (event.code === 'KeyR') {
        reset()
      } else if (isAlphabetic || isEnter) {
        tap()
      }
    })
  }
</script>

<Head title="luxmiyu → bpmtap" description="what bpm is this?" image="/preview/bpmtap.jpg" />

{#snippet options()}
  <option value="1">1/1</option>
  <option value="2">1/2</option>
  <option value="3">1/3</option>
  <option value="4">1/4</option>
  <option value="5">1/5</option>
  <option value="6">1/6</option>
  <option value="7">1/7</option>
  <option value="8">1/8</option>
  <option value="12">1/12</option>
  <option value="16">1/16</option>
  <option value="24">1/24</option>
  <option value="32">1/32</option>
  <option value="64">1/64</option>
{/snippet}

<Container fill>
  <Header title="bpm tap" description="what bpm is this?" />

  <Text>
    <p class="main">
      <Output
        value={bpm.toFixed(1)}
        width="200px"
        height="100px"
        fontSize="50px"
        fontWeight="450"
        center
      />
      BPM at
      <Input.Select bind:value={rhythm} width="72px">{@render options()}</Input.Select>
    </p>

    <p class="subtitle center">{status}</p>

    <Rows template="80px auto">
      <Button onpointerdown={tap}>Tap me!</Button>
      <Button onclick={reset}>Reset</Button>
    </Rows>

    <p class="subtitle center">You can tap with any key from A to Z, and reset the count with R.</p>
  </Text>

  <Footer />
</Container>

<style lang="sass">
  .main
    display: flex
    justify-content: center
    align-items: center
    gap: 12px
</style>
