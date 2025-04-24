<script lang="ts">
  let count = $state(0)

  let button: HTMLAnchorElement
  let label: HTMLParagraphElement

  $effect(() => {
    if (button)
      button.addEventListener('click', () => {
        count++
        if (label)
          label.innerHTML = `a button you\'ve pressed ${count === 1 ? `1 time` : `${count} times`}`
      })
  })

  let { data } = $props()

  let style = $derived(
    data.lightTheme
      ? '--color-text: #2a2a2a; --color-text-secondary: #5a5a5a; --color-selection: #e86880; --color-selection-text: #2a2a2a; --color-background: #eaeaea; --color-background-accent: #dedede; --color-shadow: #d2d2d2; --color-hr: #8a8a8a; --color-button: #d8d8d8; --color-button-border: #5a5a5a; --color-button-hover: #eaeaea; --color-button-active: #fafafa; --color-button-disabled: #fafafa; --color-input: #d8d8d8; --color-input-border: #8a8a8a; --color-scrollbar-thumb: #5a5a5a; --color-scrollbar-track: #eaeaea; --color-range: #eaeaea; --color-range-border: #aaaaaa; --color-range-background: #aaaaaa;'
      : '--color-text: #eaeaea; --color-text-secondary: #bababa; --color-selection: #cd435c; --color-selection-text: #eaeaea; --color-background: #1a1a1a; --color-background-accent: #222222; --color-shadow: #3a3a3a; --color-hr: #8a8a8a; --color-button: #2a2a2a; --color-button-border: #bababa; --color-button-hover: #3a3a3a; --color-button-active: #5a5a5a; --color-button-disabled: #8a8a8a; --color-input: #2a2a2a; --color-input-border: #5a5a5a; --color-scrollbar-thumb: #eaeaea; --color-scrollbar-track: #1a1a1a; --color-range: #bababa; --color-range-border: #3a3a3a; --color-range-background: #3a3a3a;'
  )
</script>

<div class="container" {style}>
  <img
    class="pfp"
    src="https://cdn.glitch.global/e5143343-dba7-4602-8cff-d021bb699e44/suiseihat.jpg"
    alt="luxmiyu's icon"
  />
  <h1>luxmiyu</h1>
  <p class="subtitle">a generic web template</p>

  <p>
    A clean and simple, light-weight mobile-first web template used in my own projects. Using <a
      href="https://en.wikipedia.org/wiki/HTML"
      target="_blank">HTML</a
    >,
    <a href="https://sass-lang.com/" target="_blank">Sass</a> and
    <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>, and built with
    <a href="https://vitejs.dev/">Vite</a>.
  </p>

  <a id="counter" class="button" bind:this={button}>
    <img
      class="icon"
      src="https://cdn.glitch.global/e5143343-dba7-4602-8cff-d021bb699e44/suiseihat.jpg?v=1677173567603"
      alt="luxmiyu icon"
    />
    <p id="counter-label" class="label" bind:this={label}>a button with an icon</p>
  </a>

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

    min-height: 100dvh
    width: clamp(69px, 100%, 727px)

    padding: 16px
    
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

      user-select: none

      &:is(button)
        width: auto
      
      &:is(button[disabled])
        cursor: not-allowed
        color: var(--color-button-disabled)
        background: var(--color-button)
        border: 1px solid var(--color-button-disabled)
        box-shadow: 4px 4px 0px 0px var(--color-shadow)  

        @media (hover: hover)
          &:hover
            transform: translate(0px, 0px)
            box-shadow: 4px 4px 0px 0px var(--color-shadow)

      &.hidden
        display: none

      @media (hover: hover)
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

      &[type=radio]
        appearance: none

        width: 0
        height: 0

        border: 2px solid var(--color-input-border)
        border-radius: 50%

        &:checked
          background: var(--color-text)
      
      &[type=checkbox]
        appearance: none

        position: relative

        height: 0
        width: 36px

        border: 2px solid var(--color-input-border)
        transition: 0.1s
        
        &::before
          content: ''
          display: block
          height: calc(100% - 2px)
          aspect-ratio: 1/1
          margin: 2px
          background: var(--color-text)
          transition: 0.1s

          left: -1px
          top: -1px
          
          position: absolute

        &:checked
          background: var(--color-checkbox-background)

          &::before
            left: calc(100% - 3px)
            transform: translateX(-100%)

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

  .container
    .pfp
      width: 150px
      height: 150px
      
      box-shadow: 4px 4px 0px 0px var(--color-shadow)
</style>
