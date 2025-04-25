export const legacy = [
  'metronome',
  'convert',
  'color',
  'rng',
  'progress',
  'base64',
  'base',
  'binary',
  'youtube',
  'keyboard',
  'emoji',
  'lorem',

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

  'tictactoe',
  'snake',
  'minesweeper',
  'reaction',
  'mastermind',
  'lights',
  'drums',

  'hsr_old',
]
export const disabled = ['template']

export function match(value: string): boolean {
  return legacy.includes(value)
}
