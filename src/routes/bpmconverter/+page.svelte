<script lang="ts">
  let inputRhythmSelect: HTMLSelectElement
  let inputBpmInput: HTMLInputElement
  let outputRhythmSelect: HTMLSelectElement
  let outputBpmSpan: HTMLSpanElement
  let outputMstapSpan: HTMLSpanElement
  let outputTapsSpan: HTMLSpanElement

  // update function
  function updateConverter() {
    const rhythmIn = Number(inputRhythmSelect.value)
    const rhythmOut = Number(outputRhythmSelect.value)
    const bpmIn = Number(inputBpmInput.value)

    const bpmOut = (rhythmIn * bpmIn) / rhythmOut

    outputBpmSpan.innerHTML = bpmOut.toFixed(1).toString()
    outputMstapSpan.innerHTML = (60000 / bpmOut / rhythmOut).toFixed(1).toString()
    outputTapsSpan.innerHTML = ((bpmOut * rhythmOut) / 60).toFixed(1).toString()
  }

  // add event listeners
  $effect(() => {
    inputRhythmSelect.addEventListener('change', updateConverter)
    outputRhythmSelect.addEventListener('change', updateConverter)
    inputBpmInput.addEventListener('input', updateConverter)
  })

  let { data } = $props()

  let style = $derived(
    data.lightTheme
      ? '--color-text: #2a2a2a; --color-text-secondary: #5a5a5a; --color-selection: #e86880; --color-selection-text: #2a2a2a; --color-background: #eaeaea; --color-background-accent: #dedede; --color-shadow: #d2d2d2; --color-hr: #8a8a8a; --color-button: #d8d8d8; --color-button-border: #5a5a5a; --color-button-hover: #eaeaea; --color-button-active: #fafafa; --color-button-disabled: #fafafa; --color-input: #d8d8d8; --color-input-border: #8a8a8a; --color-scrollbar-thumb: #5a5a5a; --color-scrollbar-track: #eaeaea; --color-range: #eaeaea; --color-range-border: #aaaaaa; --color-range-background: #aaaaaa;'
      : '--color-text: #eaeaea; --color-text-secondary: #bababa; --color-selection: #cd435c; --color-selection-text: #eaeaea; --color-background: #1a1a1a; --color-background-accent: #222222; --color-shadow: #3a3a3a; --color-hr: #8a8a8a; --color-button: #2a2a2a; --color-button-border: #bababa; --color-button-hover: #3a3a3a; --color-button-active: #5a5a5a; --color-button-disabled: #8a8a8a; --color-input: #2a2a2a; --color-input-border: #5a5a5a; --color-scrollbar-thumb: #eaeaea; --color-scrollbar-track: #1a1a1a; --color-range: #bababa; --color-range-border: #3a3a3a; --color-range-background: #3a3a3a;'
  )
</script>

<div class="container" {style}>
  <h1>bpm converter</h1>
  <p class="subtitle">convert between rhythms</p>

  <p id="bpm-converter">
    <select
      name="converter-input-rhythm"
      id="converter-input-rhythm"
      class="auto"
      bind:this={inputRhythmSelect}
    >
      <option value="1">1/1</option>
      <option value="2">1/2</option>
      <option value="3" selected>1/3</option>
      <option value="4">1/4</option>
      <option value="5">1/5</option>
      <option value="6">1/6</option>
      <option value="7">1/7</option>
      <option value="8">1/8</option>
      <option value="12">1/12</option>
      <option value="16">1/16</option>
      <option value="24">1/24</option>
      <option value="32">1/32</option>
    </select>
    at
    <input
      type="number"
      name="converter-input-bpm"
      id="converter-input-bpm"
      value="180"
      min="1"
      max="999"
      class="auto"
      bind:this={inputBpmInput}
    />
    BPM is equivalent to
    <select
      name="converter-output-rhythm"
      id="converter-output-rhythm"
      class="auto"
      bind:this={outputRhythmSelect}
    >
      <option value="1">1/1</option>
      <option value="2">1/2</option>
      <option value="3">1/3</option>
      <option value="4" selected>1/4</option>
      <option value="5">1/5</option>
      <option value="6">1/6</option>
      <option value="7">1/7</option>
      <option value="8">1/8</option>
      <option value="12">1/12</option>
      <option value="16">1/16</option>
      <option value="24">1/24</option>
      <option value="32">1/32</option>
    </select>
    at
    <span id="converter-output-bpm" class="output" bind:this={outputBpmSpan}>135.0</span>
    BPM.
  </p>
  <p class="subtitle">
    <span id="converter-mstap" bind:this={outputMstapSpan}>111.1</span>ms per tap or
    <span id="converter-taps" bind:this={outputTapsSpan}>9.0</span> taps per second
  </p>

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
    font-family: 'Rubik', sans-serif
    font-size: 16px

    color: var(--text)

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
      
    #bpm-converter
      line-height: 2.5rem

      #input-bpm
        width: 64px
    
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
