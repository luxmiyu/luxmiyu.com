<script lang="ts">
  import { browser } from '$app/environment'
  import Color from './Color'

  let {
    h = $bindable(),
    s = $bindable(),
    v = $bindable(),
  }: {
    h: number
    s: number
    v: number
  } = $props()

  let color = $derived(Color.fromHSV({ h, s, v }))
  let hue = $derived(Color.fromHSV({ h, s: 100, v: 100 }))

  let picker: HTMLDivElement
  let dragging = false

  function onpointerdown(e: PointerEvent) {
    window.getSelection()?.removeAllRanges()
    dragging = true
    onpointermove(e)
  }

  function onpointermove(e: PointerEvent) {
    if (!dragging) return
    e.preventDefault()

    const rect = picker.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    s = (x / rect.width) * 100
    v = 100 - (y / rect.height) * 100

    if (s < 0) s = 0
    if (s > 100) s = 100
    if (v < 0) v = 0
    if (v > 100) v = 100

    color = Color.fromHSV({ h, s, v })
  }

  function onpointerup() {
    dragging = false
  }

  $effect(() => {
    if (browser) {
      document.addEventListener('pointermove', onpointermove)
      document.addEventListener('pointerup', onpointerup)
      document.addEventListener('pointercancel', onpointerup)
    }
  })
</script>

<div class="container">
  <div bind:this={picker} class="picker" style:background={hue.toStringHex()} {onpointerdown}>
    <div class="saturation"></div>
    <div class="value"></div>

    <div class="thumb" style:top={100 - v + '%'} style:left={s + '%'}>
      <div class="bg" style:background={color.toStringHex()}></div>
    </div>
  </div>
</div>

<style lang="sass">
  .picker
    position: relative

    width: 320px
    height: 320px

    box-shadow: 4px 4px 0px 0px var(--shadow)
    border: 1px solid var(--text)
    color: var(--text)
    padding: 8px

    user-select: none
    touch-action: none

    .saturation, .value
      position: absolute
      top: 0
      left: 0
      bottom: 0
      right: 0

    .saturation
      background: linear-gradient(to right, white, transparent)

    .value
      background: linear-gradient(to bottom, transparent, black)
      
    .thumb
      position: absolute
      transform: translate(-50%, -50%)
      top: 0
      left: 50%
      width: 32px
      height: 32px
      border-radius: 50%
      border: 2px solid white

      display: flex
      justify-content: center
      align-items: center

      background: black

      pointer-events: none

      .bg
        width: calc(100% - 4px)
        height: calc(100% - 4px)
        border-radius: 50%
</style>
