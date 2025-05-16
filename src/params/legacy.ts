export const legacy = [
  'bpmtap',
  'metronome',
  'convert',
  'color',
  'rng',
  'base64',
  'base',
  'youtube',
  'keyboard',
  'emoji',

  'sliders',
  'dcag',
  'advancements',
  'hsr',
  'osucollab',
  'speedtune',
  'qingque',
  'stratagems',
  'wuwa',
  'convene',
  'adm2',
  'anything',
  'luxore',

  'wordle',
  'tictactoe',
  'snake',
  'minesweeper',
  'reaction',
  'mastermind',
  'lights',
  'drums',

  'hsr_old',
]
export const disabled = ['empty', 'template', 'convene']

export function match(value: string): boolean {
  return legacy.includes(value)
}
