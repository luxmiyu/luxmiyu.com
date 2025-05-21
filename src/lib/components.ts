export { default as Board } from './components/Board.svelte'
export { default as Box } from './components/Box.svelte'
export { default as Bricks } from './components/Bricks.svelte'
export { default as Button } from './components/Button.svelte'
export { default as Center } from './components/Center.svelte'
export { default as Columns } from './components/Columns.svelte'
export { default as Container } from './components/Container.svelte'
export { default as Footer } from './components/Footer.svelte'
export { default as Grid } from './components/Grid.svelte'
export { default as Head } from './components/Head.svelte'
export { default as Header } from './components/Header.svelte'
export { default as Icon } from './components/Icon.svelte'
export { default as Link } from './components/Link.svelte'
export { default as Output } from './components/Output.svelte'
export { default as Playground } from './components/Playground.svelte'
export { default as ProfilePicture } from './components/ProfilePicture.svelte'
export { default as Rows } from './components/Rows.svelte'
export { default as Separate } from './components/Separate.svelte'
export { default as Text } from './components/Text.svelte'

import { default as InputNumber } from './components/input/Number.svelte'
import { default as InputRange } from './components/input/Range.svelte'
import { default as InputSelect } from './components/input/Select.svelte'
import { default as InputText } from './components/input/Text.svelte'
import { default as InputTextarea } from './components/input/Textarea.svelte'

export class Input {
  static Number = InputNumber
  static Range = InputRange
  static Select = InputSelect
  static Text = InputText
  static Textarea = InputTextarea
}
