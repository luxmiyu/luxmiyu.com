export interface Tool {
  name: string
  description: string
  icon: string
  status: 'updated' | 'legacy' | 'deprecated'
}

export interface ToolTab {
  name: string
  tools: Tool[]
}

export const tooltabs: ToolTab[] = [
  {
    name: 'Tools',
    tools: [
      { name: 'empty', description: 'An empty page', icon: 'web_asset', status: 'deprecated' },
      { name: 'template', description: 'Legacy web template', icon: 'html', status: 'deprecated' },
      {
        name: 'bpmconverter',
        description: 'Convert between rhythms and BPMs',
        icon: 'music_note',
        status: 'updated',
      },
      {
        name: 'bpmtap',
        description: 'Find the BPM by tapping',
        icon: 'touch_app',
        status: 'updated',
      },
      { name: 'metronome', description: 'Simple metronome', icon: 'tune', status: 'legacy' },
      {
        name: 'convert',
        description: 'Convert between units',
        icon: 'square_foot',
        status: 'legacy',
      },
      { name: 'color', description: 'Pretty color picker', icon: 'colors', status: 'legacy' },
      { name: 'rng', description: 'Random number generator', icon: 'numbers', status: 'legacy' },
      {
        name: 'progress',
        description: 'Progress bar for the current year',
        icon: 'hourglass',
        status: 'updated',
      },
      {
        name: 'base64',
        description: 'Encode or decode Base64',
        icon: 'text_format',
        status: 'updated',
      },
      { name: 'base', description: 'Convert between bases', icon: 'timer_10', status: 'legacy' },
      {
        name: 'binary',
        description: 'Encode or decode binary or hexadecimal',
        icon: 'subscript',
        status: 'updated',
      },
      {
        name: 'youtube',
        description: 'Get the thumbnail of a YouTube video',
        icon: 'media_link',
        status: 'updated',
      },
      {
        name: 'keyboard',
        description: "Test your keyboard's keys",
        icon: 'keyboard',
        status: 'legacy',
      },
      {
        name: 'emoji',
        description: 'Quickly convert text to emoji',
        icon: 'font_download',
        status: 'updated',
      },
      { name: 'lorem', description: 'Dummy text', icon: 'sticky_note', status: 'updated' },
      { name: 'keygen', description: 'Random string generator', icon: 'key', status: 'updated' },
      { name: 'search', description: 'Search with bangs', icon: 'search', status: 'updated' },
      { name: 'bangs', description: 'Browse the bangs', icon: 'priority_high', status: 'updated' },
    ],
  },
  {
    name: 'Utility',
    tools: [
      { name: 'uwufier', description: 'Convert a string to uwu', icon: 'forum', status: 'updated' },
      {
        name: 'sliders',
        description: 'Advanced slider editor for osu!',
        icon: 'switches',
        status: 'legacy',
      },
      {
        name: 'dcag',
        description: 'Daily Cute Anime Girl (2024 version)',
        icon: 'wall_art',
        status: 'legacy',
      },
      {
        name: 'advancements',
        description: 'Minecraft advancements editor',
        icon: 'label',
        status: 'legacy',
      },
      {
        name: 'hsr',
        description: 'Banner schedule for Honkai: Star Rail',
        icon: 'lists',
        status: 'legacy',
      },
      {
        name: 'osucollab',
        description: 'Komimau osu! pfp collab',
        icon: 'group',
        status: 'legacy',
      },
      {
        name: 'speedtune',
        description: 'Advanced Honkai: Star Rail combat rotation planner',
        icon: 'steps',
        status: 'legacy',
      },
      {
        name: 'qingque',
        description: 'Probability graphs for Qingque from Honkai: Star Rail',
        icon: 'playing_cards',
        status: 'legacy',
      },
      {
        name: 'stratagems',
        description: 'List of stratagems from Helldivers 2',
        icon: 'open_with',
        status: 'updated',
      },
      {
        name: 'wuwa',
        description: 'Banner schedule for Wuthering Waves',
        icon: 'lists',
        status: 'legacy',
      },
      {
        name: 'convene',
        description: 'Convene tracker for Wuthering Waves',
        icon: 'brightness_empty',
        status: 'deprecated',
      },
      {
        name: 'adm2',
        description: 'Any Dimensions Mod 2 for Minecraft',
        icon: 'door_open',
        status: 'legacy',
      },
      {
        name: 'anything',
        description: 'Anything mod for Minecraft',
        icon: 'apparel',
        status: 'legacy',
      },
      {
        name: 'luxore',
        description: 'Luxore mod for Minecraft',
        icon: 'stack_hexagon',
        status: 'legacy',
      },
      {
        name: 'collector',
        description: 'The Collector quest tracker for Escape from Tarkov',
        icon: 'category_search',
        status: 'updated',
      },
    ],
  },
  {
    name: 'Games',
    tools: [
      { name: 'wordle', description: 'Guess the word', icon: 'password', status: 'legacy' },
      {
        name: 'tictactoe',
        description: 'Play tic-tac-toe against the computer',
        icon: 'grid_3x3',
        status: 'legacy',
      },
      {
        name: 'snake',
        description: 'Collect as many apples as you can',
        icon: 'floor',
        status: 'legacy',
      },
      { name: 'minesweeper', description: 'Flag all of the mines', icon: 'bomb', status: 'legacy' },
      { name: 'reaction', description: 'Test your reaction time', icon: 'pace', status: 'legacy' },
      {
        name: 'mastermind',
        description: 'Guess the color code',
        icon: 'page_control',
        status: 'legacy',
      },
      {
        name: 'lights',
        description: 'A puzzle game about turning off lights',
        icon: 'backlight_low',
        status: 'legacy',
      },
      { name: 'drums', description: 'Simple drum machine', icon: 'album', status: 'legacy' },
    ],
  },
]

export const tools: (Tool & { category: string })[] = tooltabs.flatMap((category) => {
  return category.tools.map((tool) => ({ ...tool, category: category.name }))
})
