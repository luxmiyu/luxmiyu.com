<script lang="ts">
  import { Header, Footer, Container, Text, Input, Output } from '$lib/components'

  let rhythmIn = $state('3')
  let rhythmOut = $state('4')
  let bpmIn = $state(180)

  let bpmOut = $derived((parseInt(rhythmIn) * bpmIn) / parseInt(rhythmOut))
  let mspt = $derived(60000 / bpmOut / parseInt(rhythmOut))
  let taps = $derived((bpmOut * parseInt(rhythmOut)) / 60)
</script>

<Container fill>
  <Header title="bpm converter" description="convert between rhythms" />

  <Text>
    <p class="center">
      <Input.Select bind:value={rhythmIn} width="72px">
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
      </Input.Select>
      at
      <Input.Number bind:value={bpmIn} min={1} max={99999} step={1} width="72px" />
      BPM is equivalent to
      <Input.Select bind:value={rhythmOut} width="72px">
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
      </Input.Select>
      at
      <Output value={bpmOut.toFixed(1)} width="172px" />
      BPM.
    </p>
    <p class="subtitle center">{mspt.toFixed(1)}ms per tap or {taps.toFixed(1)} taps per second</p>
  </Text>

  <Footer />
</Container>
