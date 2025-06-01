<script lang="ts">
  import {
    Head,
    Header,
    Footer,
    Container,
    Text,
    Input,
    Button,
    Columns,
    Copy,
    Center,
    Grid,
    Output,
  } from '$lib/components'
  import { convertText, convertArrow } from '../emoji/emoji'
  import { uwufy } from '../uwufier/uwu'

  const examples = [
    'The quick brown fox jumps over the lazy dog.',
    'Pack my box with five dozen liquor jugs.',
    'Sphinx of black quartz, judge my vow.',
    'How razorback-jumping frogs can level six piqued gymnasts!',

    'The mitochondria is the powerhouse of the cell.',
    'Water boils at 100 degrees Celsius under standard atmospheric pressure.',
    'E=mc² explains the relationship between mass and energy.',

    'A journey of a thousand miles begins with a single step.',
    "Don't count your chickens before they hatch.",

    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'The SHA-256 hash of this file ensures data integrity.',

    'She sells seashells by the seashore.',
    'How much wood would a woodchuck chuck if a woodchuck could chuck wood?',

    '"I\'ll be there in five minutes", she texted, knowing she\'d be late.',
    '"Did you put your name in the Goblet of Fire, Harry?", Dumbledore asked calmly.',

    'abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ',

    "You miss 100% of the shots you don't take.",
    'Ctrl+C, Ctrl+V is my creative process.',
    'This sentence is false.',
    'Do not go gentle into that good night.',
    "It's-a me, Mario!",
    'There is no spoon.',
    'This message will self-destruct in five seconds.',
    "You wouldn't download a car.",
    '404: Example text not found.',

    'You are not a drop in the ocean; you are the entire ocean in a drop.',
    "You don't see things as they are, you see them as you are.",

    'Any sufficiently advanced technology is indistinguishable from magic.',
    'Art should comfort the disturbed and disturb the comfortable.',

    'A mile is 5280 feet, a foot is 12 inches, 3 feet makes a yard, which is 36 inches - and lastly, there are 1760 yards in a mile.',
  ]

  function randomize() {
    inputText = examples[Math.floor(Math.random() * examples.length)]
  }

  let inputText = $state('')

  interface Converter {
    name: string
    convert: (text: string) => string
  }

  const converters: Converter[] = [
    {
      name: 'All Lowercase',
      convert: (text) => text.toLocaleLowerCase(),
    },
    {
      name: 'All Uppercase',
      convert: (text) => text.toLocaleUpperCase(),
    },
    {
      name: 'Title Case',
      convert: (text) =>
        text.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.slice(1)),
    },
    {
      name: 'Mocking Case',
      convert: (text) => {
        let result = ''
        for (let i = 0; i < text.length; i++) {
          if (i % 2 === 0) result += text[i].toUpperCase()
          else result += text[i].toLowerCase()
        }
        return result
      },
    },
    {
      name: 'Emojis',
      convert: (text) => convertText(text),
    },
    {
      name: 'Arrows',
      convert: (text) => convertArrow(text),
    },
    {
      name: 'uwufy',
      convert: (text) => uwufy(text),
    },
    {
      name: 'Spoiler Spam',
      convert: (text) =>
        text
          .split('')
          .map((c) => `||${c}||`)
          .join(''),
    },
  ]
</script>

<Head title="luxmiyu → text" description="a simple text converter" image="/preview/text.jpg" />

<Container fill>
  <Header title="text" description="a simple text converter" />

  <Text>
    <Input.Text bind:value={inputText} width="100%" />
    <Grid columns="2">
      <Button onclick={randomize}>Example Text</Button>
      <Button onclick={() => (inputText = '')} disabled={inputText.length === 0}>Clear Text</Button>
    </Grid>

    <p class="subtitle right">{inputText.length} character{inputText.length === 1 ? '' : 's'}</p>

    {#each converters.map( (c) => ({ name: c.name, convert: c.convert, converted: c.convert(inputText) }) ) as { name, convert, converted }}
      <Columns template="128px 1fr">
        <Copy value={converted} text={name} />
        <Output value={converted} width="100%" />
      </Columns>
    {/each}

    <p class="subtitle">Press on the buttons to copy to clipboard.</p>
  </Text>

  <Footer />
</Container>

<style lang="sass">
  //
</style>
