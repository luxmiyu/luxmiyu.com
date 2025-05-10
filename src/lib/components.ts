export { default as Board } from './components/Board.svelte'
export { default as Box } from './components/Box.svelte'
export { default as Button } from './components/Button.svelte'
export { default as Container } from './components/Container.svelte'
export { default as Footer } from './components/Footer.svelte'
export { default as Grid } from './components/Grid.svelte'
export { default as Header } from './components/Header.svelte'
export { default as Icon } from './components/Icon.svelte'
export { default as Link } from './components/Link.svelte'
export { default as Masonry } from './components/Masonry.svelte'
export { default as Playground } from './components/Playground.svelte'
export { default as ProfilePicture } from './components/ProfilePicture.svelte'
export { default as Output } from './components/Output.svelte'
export { default as Text } from './components/Text.svelte'

import { default as InputNumber } from './components/input/Number.svelte'
import { default as InputSelect } from './components/input/Select.svelte'

export class Input {
  static Number = InputNumber
  static Select = InputSelect
}
