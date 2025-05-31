<script lang="ts">
  import { Grid, Columns, Center, Text } from '$lib/components'
  import Color from './Color'

  let {
    hsv,
    rgb,
    smoothTransitionTo,
  }: {
    hsv: Color
    rgb: Color
    smoothTransitionTo: (color: Color) => void
  } = $props()

  let inputHex: HTMLInputElement
  let inputRGB: HTMLInputElement
  let inputHSL: HTMLInputElement
  let inputHSV: HTMLInputElement
  let inputCMYK: HTMLInputElement
  let inputINT: HTMLInputElement

  function cleanNumber(string: string): number {
    return Number(string.replace(/[^0-9.]/g, ''))
  }

  function onInputHex(event?: Event) {
    if (!event) return
    let value = (event.target as HTMLInputElement).value

    if (!value.match(/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i)) return

    smoothTransitionTo(Color.fromHex(value))
  }

  function onInputRGB(event?: Event) {
    if (!event) return
    let value = (event.target as HTMLInputElement).value

    let array = value.split(',').map(cleanNumber)
    if (array.length !== 3 || array.some(isNaN)) return

    array = array.map((value) => Math.max(0, Math.min(255, value)))
    let [r, g, b] = array
    smoothTransitionTo(Color.fromRGB({ r, g, b }))
  }

  function onInputHSL(event?: Event) {
    if (!event) return
    let value = (event.target as HTMLInputElement).value

    let array = value.split(',').map(cleanNumber)
    if (array.length !== 3 || array.some(isNaN)) return

    let [h, s, l] = [
      Math.max(0, Math.min(360, array[0])),
      Math.max(0, Math.min(100, array[1])),
      Math.max(0, Math.min(100, array[2])),
    ]

    smoothTransitionTo(Color.fromHSL({ h, s, l }))
  }

  function onInputHSV(event?: Event) {
    if (!event) return
    let value = (event.target as HTMLInputElement).value

    let array = value.split(',').map(cleanNumber)
    if (array.length !== 3 || array.some(isNaN)) return

    let [h, s, v] = [
      Math.max(0, Math.min(360, array[0])),
      Math.max(0, Math.min(100, array[1])),
      Math.max(0, Math.min(100, array[2])),
    ]

    smoothTransitionTo(Color.fromHSV({ h, s, v }))
  }

  function onInputCMYK(event?: Event) {
    if (!event) return
    let value = (event.target as HTMLInputElement).value

    let array = value.split(',').map(cleanNumber)
    if (array.length !== 4 || array.some(isNaN)) return

    let [c, m, y, k] = [
      Math.max(0, Math.min(100, array[0])),
      Math.max(0, Math.min(100, array[1])),
      Math.max(0, Math.min(100, array[2])),
      Math.max(0, Math.min(100, array[3])),
    ]

    smoothTransitionTo(Color.fromCMYK({ c, m, y, k }))
  }

  function onInputINT(event?: Event) {
    if (!event) return
    let value = (event.target as HTMLInputElement).value

    if (isNaN(parseInt(value))) return
    smoothTransitionTo(Color.fromINT({ n: parseInt(value) }))
  }

  $effect(() => {
    let active = document.activeElement
    if (active !== inputHex) inputHex.value = hsv.toStringHex()
    if (active !== inputRGB) inputRGB.value = rgb.toStringRGB().slice(4, -1)
    if (active !== inputHSL) inputHSL.value = hsv.toStringHSL().slice(4, -1)
    if (active !== inputHSV) inputHSV.value = hsv.toStringHSV().slice(4, -1)
    if (active !== inputCMYK) inputCMYK.value = rgb.toStringCMYK().slice(5, -1)
    if (active !== inputINT) inputINT.value = rgb.toStringINT().slice(4, -1)
  })
</script>

<Text>
  <Grid minmax="300px">
    <Columns template="48px 1fr">
      <Center><p class="subtitle center">HEX</p></Center>
      <input type="text" bind:this={inputHex} oninput={onInputHex} />
    </Columns>

    <Columns template="48px 1fr">
      <Center><p class="subtitle center">RGB</p></Center>
      <input type="text" bind:this={inputRGB} oninput={onInputRGB} />
    </Columns>

    <Columns template="48px 1fr">
      <Center><p class="subtitle center">HSL</p></Center>
      <input type="text" bind:this={inputHSL} oninput={onInputHSL} />
    </Columns>

    <Columns template="48px 1fr">
      <Center><p class="subtitle center">HSV</p></Center>
      <input type="text" bind:this={inputHSV} oninput={onInputHSV} />
    </Columns>

    <Columns template="48px 1fr">
      <Center><p class="subtitle center">CMYK</p></Center>
      <input type="text" bind:this={inputCMYK} oninput={onInputCMYK} />
    </Columns>

    <Columns template="48px 1fr">
      <Center><p class="subtitle center">INT</p></Center>
      <input type="text" bind:this={inputINT} oninput={onInputINT} />
    </Columns>
  </Grid>
</Text>

<style lang="sass">
  input[type=text]
    width: auto
    height: 36px

    border: 1px solid var(--text-disabled)
    background: var(--card)
    color: var(--text)
    padding: 8px

    text-align: center
</style>
