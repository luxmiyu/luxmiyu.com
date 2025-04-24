<script lang="ts">
  import { uwufy } from './uwu'

  let input: HTMLTextAreaElement
  let output: HTMLParagraphElement

  let buttonCopy: HTMLButtonElement
  let buttonDelete: HTMLButtonElement

  let timeout: number = 0

  $effect(() => {
    input.addEventListener('input', () => {
      output.innerText = uwufy(input.value)
    })

    buttonCopy.onclick = () => {
      navigator.clipboard.writeText(output.innerText)
      buttonCopy.innerHTML = 'copied!'
      clearTimeout(timeout)
      timeout = setTimeout(() => (buttonCopy.innerHTML = 'copi tex'), 1000)
    }

    buttonDelete.onclick = () => {
      input.value = ''
      output.innerText = ''
    }
  })

  let { data } = $props()

  let style = $derived(
    data.lightTheme
      ? '--color-text: #2a2a2a; --color-text-secondary: #5a5a5a; --color-selection: #e86880; --color-selection-text: #2a2a2a; --color-background: #eaeaea; --color-background-accent: #dedede; --color-shadow: #d2d2d2; --color-button: #d8d8d8; --color-button-border: #5a5a5a; --color-button-hover: #eaeaea; --color-button-active: #fafafa; --color-input: #d8d8d8; --color-input-border: #8a8a8a; --color-scrollbar-thumb: #5a5a5a; --color-scrollbar-track: #eaeaea;'
      : '--color-text: #eaeaea; --color-text-secondary: #bababa; --color-selection: #cd435c; --color-selection-text: #eaeaea; --color-background: #1a1a1a; --color-background-accent: #222222; --color-shadow: #3a3a3a; --color-button: #2a2a2a; --color-button-border: #bababa; --color-button-hover: #3a3a3a; --color-button-active: #5a5a5a; --color-input: #2a2a2a; --color-input-border: #5a5a5a; --color-scrollbar-thumb: #eaeaea; --color-scrollbar-track: #1a1a1a;'
  )
</script>

<div class="container" {style}>
  <h1 class="title">uwufier</h1>
  <p class="subtitle">can uwu uwufy me</p>

  <h2>tex to be uwufied</h2>
  <h3>type smth in dis box</h3>

  <textarea name="input-text" id="input-text" cols="30" rows="10" bind:this={input}></textarea>

  <h3>an uwu wiww git da twanswated tex in dis otha box</h3>
  <p id="output-text" class="output" bind:this={output}></p>

  <div class="buttons">
    <button id="copy" bind:this={buttonCopy}>copi tex</button><button
      id="delete"
      bind:this={buttonDelete}>delet tex</button
    >
  </div>

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
    
    .title
      // font-family: $font-h
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
    
    input[type=text], textarea, .output
      width: 100%
      padding: 8px
      color: var(--color-text)
      font-family: $font-p
      font-size: 0.9rem
      line-height: 1.1rem
      font-weight: 300
      cursor: text
      background: var(--color-input)
      border: 1px solid var(--color-input-border)
      resize: vertical

      text-align: justify
    
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
