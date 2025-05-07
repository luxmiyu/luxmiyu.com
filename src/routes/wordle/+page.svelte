<script lang="ts">
  import words from './words'
  import answers from './answers'
  import { browser } from '$app/environment'

  $effect(() => {
    if (!browser) return

    const sectionGame = document.querySelector('#game') as HTMLElement
    const sectionKeyboard = document.querySelector('#keyboard') as HTMLElement
    const sectionPopup = document.querySelector('#popup') as HTMLElement
    const popupMessage = document.querySelector('#popup-message') as HTMLElement
    const buttonReset = document.querySelector('#reset') as HTMLAnchorElement

    let word = ''
    let guesses = 0
    let end = false

    const KEYS = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
    const KEYCODES: string[] = []
    const N_GUESSES = 6
    const WORDLIST = words
    const ANSWERS = answers

    // fill keycodes
    for (let i = 0; i < KEYS.length; i++) {
      for (let j = 0; j < KEYS[i].length; j++) {
        KEYCODES.push(`Key${KEYS[i][j].toUpperCase()}`)
      }
    }
    KEYCODES.push('Enter')
    KEYCODES.push('NumpadEnter')
    KEYCODES.push('Backspace')

    function resetGame() {
      // reset game
      sectionGame.innerHTML = ''
      sectionKeyboard.innerHTML = ''
      sectionPopup.classList.add('hidden')
      buttonReset.classList.add('hidden')
      guesses = 0
      end = false

      // pick a random word
      word = ANSWERS[Math.floor(Math.random() * ANSWERS.length)]

      // create empty guesses
      for (let i = 0; i < N_GUESSES; i++) {
        const div = document.createElement('div')
        div.classList.add('guess-word')
        div.id = `guess-${i}`
        sectionGame.appendChild(div)

        for (let j = 0; j < word.length; j++) {
          const p = document.createElement('p')
          p.classList.add('guess-letter')
          p.id = `guess-${i}-${j}`
          div.appendChild(p)
        }
      }

      // create keyboard
      for (let i = 0; i < KEYS.length; i++) {
        const div = document.createElement('div')
        div.classList.add('keyboard-row')
        sectionKeyboard.appendChild(div)

        // for the last row, create enter
        if (i === KEYS.length - 1) {
          const button = document.createElement('button')
          button.classList.add('keyboard-key')
          button.id = 'key-enter'
          button.innerText = '↵'
          button.onclick = () => {
            press('Enter')
          }
          div.appendChild(button)
        }

        // for each row, create the keys
        for (let j = 0; j < KEYS[i].length; j++) {
          const button = document.createElement('button')
          button.classList.add('keyboard-key')
          button.id = `key-${KEYS[i][j]}`
          button.innerText = KEYS[i][j].toUpperCase()
          button.onclick = () => {
            press(`Key${KEYS[i][j].toUpperCase()}`)
          }

          div.appendChild(button)
        }

        // for the last row, create backspace
        if (i === KEYS.length - 1) {
          const button = document.createElement('button')
          button.classList.add('keyboard-key')
          button.id = 'key-backspace'
          button.innerText = '⌫'
          button.onclick = () => {
            press('Backspace')
          }
          div.appendChild(button)
        }
      }

      sectionPopup.classList.add('hidden')
    }

    function sleep(ms: number): Promise<void> {
      return new Promise((resolve) => setTimeout(resolve, ms))
    }

    async function animateKey(key: string) {
      const button = document.querySelector(`#key-${key}`) as HTMLButtonElement
      button.classList.add('active')
      await sleep(150)
      button.classList.remove('active')
      button.classList.add('hover')
      await sleep(50)
      button.classList.remove('hover')
    }

    function press(key: string) {
      if (end) return

      if (!KEYCODES.includes(key)) return

      if (key === 'Enter' || key === 'NumpadEnter') return attempt()
      if (key === 'Backspace') return deleteLetter()

      let letter = key.toLowerCase().slice(-1)

      let button = document.querySelector(`#key-${letter}`) as HTMLButtonElement | null
      if (!button) return

      // get the game row
      const gameRow = document.querySelector(`#guess-${guesses}`) as HTMLElement

      // get the first empty letter
      const gameLetter = gameRow.querySelector('.guess-letter:not(.filled)') as HTMLElement | null
      if (!gameLetter) return

      // fill the letter
      gameLetter.innerText = letter.toUpperCase()
      gameLetter.classList.add('filled')
    }

    function deleteLetter() {
      if (end) return

      // get the game row
      const gameRow = document.querySelector(`#guess-${guesses}`) as HTMLElement

      // delete the last filled letter
      for (let i = word.length - 1; i >= 0; i--) {
        const gameLetter = gameRow.querySelector(`#guess-${guesses}-${i}`) as HTMLElement | null
        if (!gameLetter) return

        if (gameLetter.classList.contains('filled')) {
          gameLetter.innerText = ''
          gameLetter.classList.remove('filled')
          return
        }
      }
    }

    function shake() {
      if (end) return

      const gameRow = document.querySelector(`#guess-${guesses}`) as HTMLElement
      gameRow.classList.add('shake')
      setTimeout(() => {
        gameRow.classList.remove('shake')
      }, 200)
    }

    function attempt() {
      if (end) return

      // get the game row
      const gameRow = document.querySelector(`#guess-${guesses}`) as HTMLElement

      // make sure all letters are filled
      for (let i = 0; i < word.length; i++) {
        const gameLetter = gameRow.querySelector(`#guess-${guesses}-${i}`) as HTMLElement | null
        if (!gameLetter) return

        if (!gameLetter.classList.contains('filled')) return shake()
      }

      // read word
      let guessWord = ''
      for (let i = 0; i < gameRow.children.length; i++) {
        const gameLetter = gameRow.children[i] as HTMLElement
        guessWord += gameLetter.innerText.toLowerCase()
      }

      // check if word exists
      if (!WORDLIST.includes(guessWord)) return shake()

      let letterCount = {} as { [key: string]: number }

      // add all word letters to the letter count
      for (let i = 0; i < word.length; i++) {
        if (letterCount[word[i]]) {
          letterCount[word[i]]++
        } else {
          letterCount[word[i]] = 1
        }
      }

      // mark all green letters
      for (let i = 0; i < word.length; i++) {
        const gameLetter = gameRow.querySelector(`#guess-${guesses}-${i}`) as HTMLElement | null
        const key = document.querySelector(`#key-${word[i]}`) as HTMLButtonElement | null
        if (!gameLetter || !key) return

        if (gameLetter.innerText.toLowerCase() === word[i]) {
          gameLetter.classList.add('green')
          key.classList.remove('yellow')
          key.classList.add('green')
          letterCount[word[i]]--
        }
      }

      // mark all yellow letters
      for (let i = 0; i < word.length; i++) {
        const gameLetter = gameRow.querySelector(`#guess-${guesses}-${i}`) as HTMLElement | null
        if (!gameLetter) return

        const letter = gameLetter.innerText.toLowerCase()
        const key = document.querySelector(`#key-${letter}`) as HTMLButtonElement | null
        if (!key) return

        if (letter !== word[i] && word.includes(letter) && letterCount[letter] > 0) {
          gameLetter.classList.add('yellow')
          if (!key.classList.contains('green')) {
            key.classList.add('yellow')
          }
          letterCount[letter]--
        } else {
          if (!gameLetter.classList.contains('green')) {
            gameLetter.classList.add('black')
          }
        }
      }

      // mark all black letters
      for (let i = 0; i < word.length; i++) {
        const gameLetter = gameRow.querySelector(`#guess-${guesses}-${i}`) as HTMLElement | null
        if (!gameLetter) return

        if (!word.includes(gameLetter.innerText.toLowerCase())) {
          // mark the key as black
          const button = document.querySelector(
            `#key-${gameLetter.innerText.toLowerCase()}`
          ) as HTMLButtonElement | null
          if (!button) return

          gameLetter.classList.add('black')
          button.classList.add('black')
        }
      }

      // if the word is correct, show the popup
      if (guessWord === word) {
        sectionPopup.classList.remove('hidden')
        popupMessage.innerText = 'You guessed the word! 🎉'
        end = true
        return
      }

      // if the word is incorrect, increment the guesses
      guesses++

      // if the guesses are over, show the popup
      if (guesses >= N_GUESSES) {
        sectionPopup.classList.remove('hidden')
        popupMessage.innerText = `You lost! The word was ${word[0].toUpperCase() + word.slice(1)} 😢`
        end = true
        return
      }
    }

    resetGame()

    const keydown = async (e: KeyboardEvent) => {
      if (e.code === 'Escape') return resetGame()

      if (end) return
      if (e.repeat) return
      if (e.altKey || e.ctrlKey || e.metaKey) return
      if (!KEYCODES.includes(e.code)) return

      let button = document.querySelector(`#key-${e.key.toLowerCase()}`) as HTMLButtonElement | null
      if (!button) return

      animateKey(e.key.toLowerCase())

      press(e.code)
    }

    document.addEventListener('keydown', keydown)

    buttonReset.onclick = () => {
      resetGame()
    }

    return () => {
      document.removeEventListener('keydown', keydown)
      buttonReset.onclick = null
    }
  })

  let { data } = $props()

  let style = $derived(
    data.lightTheme
      ? '--color-text: #2a2a2a; --color-text-secondary: #5a5a5a; --color-selection: #e86880; --color-selection-text: #2a2a2a; --color-background: #eaeaea; --color-background-accent: #dedede; --color-shadow: #d2d2d2; --color-hr: #8a8a8a; --color-button: #d8d8d8; --color-button-border: #5a5a5a; --color-button-hover: #eaeaea; --color-button-active: #fafafa; --color-button-disabled: #fafafa; --color-input: #d8d8d8; --color-input-border: #8a8a8a; --color-scrollbar-thumb: #5a5a5a; --color-scrollbar-track: #eaeaea; --color-range: #eaeaea; --color-range-border: #aaaaaa; --color-range-background: #aaaaaa; --color-key-green: #79ed7d; --color-key-yellow: #e8d684; --color-key-black: #bfbfbf; --color-key-black-text: #9c9c9c;'
      : '--color-text: #eaeaea; --color-text-secondary: #bababa; --color-selection: #cd435c; --color-selection-text: #eaeaea; --color-background: #1a1a1a; --color-background-accent: #222222; --color-shadow: #3a3a3a; --color-hr: #8a8a8a; --color-button: #2a2a2a; --color-button-border: #bababa; --color-button-hover: #3a3a3a; --color-button-active: #5a5a5a; --color-button-disabled: #8a8a8a; --color-input: #2a2a2a; --color-input-border: #5a5a5a; --color-scrollbar-thumb: #eaeaea; --color-scrollbar-track: #1a1a1a; --color-range: #bababa; --color-range-border: #3a3a3a; --color-range-background: #3a3a3a; --color-key-green: #4cb04f; --color-key-yellow: #e0c85a; --color-key-black: #2e2e2e; --color-key-black-text: #525252;'
  )
</script>

<div class="container" {style}>
  <section id="title">
    <h1>wordle</h1>
    <p class="subtitle">simple word guessing game</p>
  </section>

  <section id="game"></section>

  <section id="keyboard"></section>

  <section id="popup" class="hidden">
    <div id="popup-container">
      <h2 id="popup-message">uwu</h2>
    </div>
  </section>

  <footer>
    <p>
      <a href="/">by luxmiyu</a> | <a id="reset">reset game</a>
    </p>
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

    height: 100dvh
    width: clamp(69px, 100%, 727px)

    padding: 16px

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

    :global(.button), :global(button)
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

      &:hover, &.hover
        transform: translate(1px, 1px)
        box-shadow: 3px 3px 0px 0px var(--color-shadow)

        background: var(--color-button-hover)

      &:active, &.active
        transform: translate(3px, 3px)
        box-shadow: 1px 1px 0px 0px var(--color-shadow)

        background: var(--color-button-active)

    :global(.button .icon)
      width: 32px
      height: 32px
    
    :global(.button .label)
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

    #title
      display: flex
      flex-direction: column
      align-items: center
      justify-content: center
      gap: 8px

      height: 50px

    #game
      display: flex
      flex-direction: column
      align-items: center
      gap: 8px

      width: 100%
      height: 100%

      padding-top: 8px

      overflow-x: hidden
      overflow-y: auto

      :global(.guess-word)
        display: flex
        align-items: center
        justify-content: center
        gap: 8px

        width: 100%

        &.shake
          animation: shake 0.2s ease-in-out

          @keyframes shake
            0%
              transform: translateX(0px)
            20%
              transform: translateX(5px)
            40%
              transform: translateX(-5px)
            60%
              transform: translateX(5px)
            80%
              transform: translateX(-5px)
            100%
              transform: translateX(0px)

      :global(.guess-letter)
        display: flex
        align-items: center
        justify-content: center

        width: 64px
        height: 64px

        border: 1px solid var(--color-button-border)
        background: var(--color-background-accent)

        font-size: 2rem
        font-weight: 800

      :global(.guess-letter.green)
        background: var(--color-key-green)

      :global(.guess-letter.yellow)
        background: var(--color-key-yellow)

      :global(.guess-letter.black)
        background: var(--color-key-black)

    #keyboard
      display: flex
      flex-direction: column
      align-items: center
      justify-content: center
      gap: 8px

      width: 100%

      :global(.keyboard-row)
        display: flex
        align-items: center
        justify-content: center
        gap: 8px

        width: 100%

      :global(.keyboard-key)
        display: flex
        align-items: center
        justify-content: center

        width: 48px
        height: 48px

        cursor: pointer
        user-select: none

        font-weight: 400

        color: var(--color-text)
        border-color: var(--color-button-border)

        &#key-backspace, &#key-enter
          width: 76px

      :global(.keyboard-key.green)
        background: var(--color-key-green)

      :global(.keyboard-key.yellow)
        background: var(--color-key-yellow)

      :global(.keyboard-key.black)
        background: var(--color-key-black)
        color: var(--color-key-black-text)
        border-color: var(--color-key-black-text)

    #popup
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0

      display: flex
      align-items: center
      justify-content: center

      width: 100dvw
      height: 100dvh

      pointer-events: none

      &.hidden
        display: none

      #popup-container
        display: flex
        align-items: center
        justify-content: center

        width: 100%
        height: 50px

        background: #000000bb

        #popup-message
          font-size: 1.25rem
          font-weight: 500
          text-align: center
          
          transform: translate(0px, -4px)

          color: #eeeeee

    footer
      display: flex
      flex-direction: column
      align-items: center
      justify-content: center
      gap: 8px
      
      color: var(--color-text-secondary)

      height: 32px

      p
        font-family: $font-p
        font-size: 0.7rem
        font-weight: 300

        a
          color: var(--color-text-secondary)
          cursor: pointer

          &:hover
            text-decoration: underline
</style>
