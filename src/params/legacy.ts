export const legacy = [
  'bpmtap',
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

  'uwufier',
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
export const disabled = ['empty', 'template']

export function match(value: string): boolean {
  return legacy.includes(value)
}
