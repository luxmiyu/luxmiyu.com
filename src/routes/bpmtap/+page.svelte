<script lang="ts">
  let { data } = $props()

  let style = $derived(
    data.lightTheme
      ? '--color-text: #2a2a2a; --color-text-secondary: #5a5a5a; --color-selection: #e86880; --color-selection-text: #2a2a2a; --color-background: #eaeaea; --color-background-accent: #dedede; --color-shadow: #d2d2d2; --color-hr: #8a8a8a; --color-button: #d8d8d8; --color-button-border: #5a5a5a; --color-button-hover: #eaeaea; --color-button-active: #fafafa; --color-button-disabled: #fafafa; --color-input: #d8d8d8; --color-input-border: #8a8a8a; --color-scrollbar-thumb: #5a5a5a; --color-scrollbar-track: #eaeaea; --color-range: #eaeaea; --color-range-border: #aaaaaa; --color-range-background: #aaaaaa;'
      : '--color-text: #eaeaea; --color-text-secondary: #bababa; --color-selection: #cd435c; --color-selection-text: #eaeaea; --color-background: #1a1a1a; --color-background-accent: #222222; --color-shadow: #3a3a3a; --color-hr: #8a8a8a; --color-button: #2a2a2a; --color-button-border: #bababa; --color-button-hover: #3a3a3a; --color-button-active: #5a5a5a; --color-button-disabled: #8a8a8a; --color-input: #2a2a2a; --color-input-border: #5a5a5a; --color-scrollbar-thumb: #eaeaea; --color-scrollbar-track: #1a1a1a; --color-range: #bababa; --color-range-border: #3a3a3a; --color-range-background: #3a3a3a;'
  )

  $effect(() => {
    // a tool that calculates the BPM you're tapping, at a given rhythm (1/1, 1/2, 1/3, 1/4, etc.)

    const elements = {
      bpm: document.getElementById('bpm-value') as HTMLSpanElement,
      rhythm: document.getElementById('rhythm') as HTMLSelectElement,
      total: document.getElementById('total') as HTMLSpanElement,
      mstap: document.getElementById('mstap') as HTMLSpanElement,
      taps: document.getElementById('taps') as HTMLSpanElement,

      // buttons
      tap: document.getElementById('tap') as HTMLAnchorElement,
      reset: document.getElementById('reset') as HTMLAnchorElement,

      // details
      details: document.getElementById('details') as HTMLParagraphElement,
      detailsremaining: document.getElementById('details-remaining') as HTMLParagraphElement,
    }

    let startTime: number = 0
    let endTime: number = 0
    let totalTaps: number = 0

    function updateBPM() {
      if (totalTaps < 3) {
        elements.bpm.textContent = '0.0'
        elements.total.textContent = '0'
        elements.mstap.textContent = '0.0'
        elements.taps.textContent = '0.0'

        let remaining = 3 - totalTaps
        if (totalTaps === 0) {
          elements.detailsremaining.textContent = 'Waiting for taps...'
        } else if (remaining === 1) {
          elements.detailsremaining.textContent = 'Tap 1 more time...'
        } else {
          elements.detailsremaining.textContent = `Tap ${remaining} more times...`
        }

        elements.details.classList.add('hidden')
        elements.detailsremaining.classList.remove('hidden')

        return
      }

      elements.details.classList.remove('hidden')
      elements.detailsremaining.classList.add('hidden')

      const rhythm = elements.rhythm.value
      const bpm = ((totalTaps - 1) / ((endTime - startTime) / 1000)) * (60 / Number(rhythm))

      elements.bpm.textContent = bpm.toFixed(1)
      elements.total.textContent = totalTaps.toString()
      elements.mstap.textContent = ((endTime - startTime) / (totalTaps - 1)).toFixed(1)
      elements.taps.textContent = ((totalTaps - 1) / ((endTime - startTime) / 1000)).toFixed(1)
    }

    function tap() {
      if (startTime === 0) {
        startTime = Date.now()
      }

      endTime = Date.now()
      totalTaps++

      updateBPM()
    }

    function reset() {
      startTime = 0
      endTime = 0
      totalTaps = 0

      updateBPM()
    }

    elements.tap.addEventListener('pointerdown', tap)
    elements.reset.addEventListener('click', reset)
    elements.rhythm.addEventListener('change', updateBPM)

    const keydown = (event: KeyboardEvent) => {
      const isAlphabetic = event.code.startsWith('Key') && event.code.length === 4
      const isEnter = ['Space', 'Enter', 'NumpadEnter'].includes(event.code)

      if (event.code === 'KeyR') {
        reset()
      } else if (isAlphabetic || isEnter) {
        tap()
      }
    }

    document.addEventListener('keydown', keydown)

    updateBPM()

    return () => {
      elements.tap.removeEventListener('pointerdown', tap)
      elements.reset.removeEventListener('click', reset)
      elements.rhythm.removeEventListener('change', updateBPM)
      document.removeEventListener('keydown', keydown)
    }
  })
</script>

<div class="container" {style}>
  <h1>bpm tap</h1>
  <p class="subtitle">what bpm is this?</p>

  <div id="output">
    <div id="bpm" class="output">
      <p id="bpm-value">180.0</p>
    </div>
    BPM at
    <select name="rhythm" id="rhythm" class="auto">
      <option value="1" selected>1/1</option>
      <option value="2">1/2</option>
      <option value="3">1/3</option>
      <option value="4">1/4</option>
      <option value="6">1/6</option>
      <option value="8">1/8</option>
    </select>
  </div>
  <p id="details-remaining" class="subtitle">Tap 3 more times to see results.</p>
  <p id="details" class="subtitle hidden">
    <span id="total">64</span> taps at <span id="mstap">333.3</span>ms per tap or
    <span id="taps">3.0</span> taps per second
  </p>

  <a id="tap" class="button">
    <p class="label">Tap me!</p>
  </a>

  <a id="reset" class="button">
    <p class="label">Reset</p>
  </a>

  <p class="subtitle">You can tap with any key from A to Z, and reset the count with R.</p>

  <footer>
    <a href="/">by luxmiyu</a>
  </footer>
</div>

<!-- svelte-ignore css_unused_selector -->
<style lang="sass">
  $font-p: 'Rubik', sans-serif

  a
    text-decoration: none
    color: var(--color-text)

  .container
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    gap: 12px

    min-height: 90vh
    width: clamp(69px, 100%, 727px)

    padding: 16px
    padding-top: 32px

    .pfp
      width: 150px
      height: 150px
      
      box-shadow: 4px 4px 0px 0px var(--color-shadow)
    
    h1
      font-size: 1.75rem
      text-shadow: 3px 3px 0 var(--color-shadow)

      color: var(--color-text)

      font-weight: 800
    
    .subtitle
      font-family: $font-p
      font-size: 0.8rem
      font-weight: 300
      
      color: var(--color-text-secondary)

      &.hidden
        display: none
    
    h2
      width: 100%
      margin-top: 6px
      margin-bottom: -2px
      font-size: 1rem
      font-weight: 400
    
    h3
      width: 100%
      margin: -2px 0

      font-size: 0.8rem
      color: var(--color-text-secondary)
    
    p
      font-family: $font-p
      font-size: 0.9rem
      font-weight: 300

      color: var(--color-text)

      text-align: justify
    
      strong
        font-weight: 500

      em
        font-style: italic

      a
        color: var(--color-text-secondary)
        cursor: pointer

        &:hover:not(.button)
          text-decoration: underline
    
    hr
      width: 100%
      height: 1px
      border: none
      background: var(--color-hr)
    
    .buttons
      display: flex
      gap: 12px
      width: 100%

    .button, button
      display: flex
      align-items: center
      gap: 12px

      width: 100%

      padding: 8px
      color: var(--color-text)
      font-family: $font-p
      font-size: 0.9rem
      font-weight: 300
      cursor: pointer
      background: var(--color-button)
      border: 1px solid var(--color-button-border)
      
      box-shadow: 4px 4px 0px 0px var(--color-shadow)

      user-select: none

      &:is(button)
        width: auto
      
      &:is(button[disabled])
        cursor: not-allowed
        color: var(--color-button-disabled)
        background: var(--color-button)
        border: 1px solid var(--color-button-disabled)
        box-shadow: 4px 4px 0px 0px var(--color-shadow)  

        &:hover
          transform: translate(0px, 0px)
          box-shadow: 4px 4px 0px 0px var(--color-shadow)

      &.hidden
        display: none

      &:hover
        transform: translate(1px, 1px)
        box-shadow: 3px 3px 0px 0px var(--color-shadow)

        background: var(--color-button-hover)

      &:active
        transform: translate(3px, 3px)
        box-shadow: 1px 1px 0px 0px var(--color-shadow)

        background: var(--color-button-active)

      .icon
        width: 32px
        height: 32px
      
      .label
        font-family: $font-p
        font-size: 1rem
        font-weight: 300

        color: var(--color-text)

        overflow: hidden
    
    #output
      display: flex
      justify-content: center
      align-items: center
      gap: 12px

      #bpm
        width: 180px
        height: 100px
        display: flex
        justify-content: center
        align-items: center

        p
          font-size: 3rem
          font-weight: 500
      
    #tap
      height: 64px

      .label
        width: 100%
        text-align: center
      
    #reset
      // height: 42px

      .label
        width: 100%
        text-align: center
    
    input, textarea, select, .output
      width: 100%
      padding: 8px
      color: var(--color-text)
      font-family: $font-p
      font-size: 0.9rem
      line-height: 1.1rem
      font-weight: 300
      cursor: pointer
      background: var(--color-input)
      border: 1px solid var(--color-input-border)

      &:is(textarea), &[type=text], &[type=number]
        cursor: text

      &:is(textarea)
        resize: vertical

      &:is(.auto)
        width: auto

      &[type=range]
        border: none
        background: none
        height: 23px
        -webkit-appearance: none
        margin: 10px 0
        width: 100%

        &:focus
          outline: none
        
        &::-webkit-slider-runnable-track
          width: 100%
          height: 8px
          cursor: pointer
          background: var(--color-range-background)
          border: 1px solid var(--color-range-border)
        
        &::-webkit-slider-thumb
          border: 1px solid var(--color-range-border)
          height: 16px
          width: 16px
          background: var(--color-range)
          cursor: pointer
          -webkit-appearance: none
          margin-top: -5px

        &:focus::-webkit-slider-runnable-track
          background: var(--color-range-background)

        &::-moz-range-track
          width: 100%
          height: 8px
          cursor: pointer
          background: var(--color-range-background)
          border: 1px solid var(--color-range-border)

        &::-moz-range-thumb
          border: 1px solid var(--color-range-border)
          height: 16px
          width: 16px
          background: var(--color-range)
          cursor: pointer

        &::-ms-track
          width: 100%
          height: 8px
          cursor: pointer
          background: transparent
          border-color: transparent
          color: transparent

        &::-ms-fill-lower
          background: var(--color-range-background)
          border: 1px solid var(--color-range-border)

        &::-ms-fill-upper
          background: var(--color-range-background)
          border: 1px solid var(--color-range-border)

        &::-ms-thumb
          border: 1px solid var(--color-range-border)
          height: 16px
          width: 16px
          background: var(--color-range)
          cursor: pointer
          margin-top: 0px

        &:focus::-ms-fill-lower
          background: var(--color-range-background)

        &:focus::-ms-fill-upper
          background: var(--color-range-background)

    footer
      font-family: $font-p
      font-size: 0.7rem
      font-weight: 300
      
      color: var(--color-text-secondary)

      padding-top: 6px

      a
        color: var(--color-text-secondary)
        cursor: pointer

        &:hover
          text-decoration: underline
</style>
