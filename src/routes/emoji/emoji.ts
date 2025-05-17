function toText(char: string): string {
  switch (char.toLocaleLowerCase()) {
    // long space
    case ' ':
      return ' '

    case 'a':
      return '🇦'
    case 'b':
      return '🇧'
    case 'c':
      return '🇨'
    case 'd':
      return '🇩'
    case 'e':
      return '🇪'
    case 'f':
      return '🇫'
    case 'g':
      return '🇬'
    case 'h':
      return '🇭'
    case 'i':
      return '🇮'
    case 'j':
      return '🇯'
    case 'k':
      return '🇰'
    case 'l':
      return '🇱'
    case 'm':
      return '🇲'
    case 'n':
      return '🇳'
    case 'o':
      return '🇴'
    case 'p':
      return '🇵'
    case 'q':
      return '🇶'
    case 'r':
      return '🇷'
    case 's':
      return '🇸'
    case 't':
      return '🇹'
    case 'u':
      return '🇺'
    case 'v':
      return '🇻'
    case 'w':
      return '🇼'
    case 'x':
      return '🇽'
    case 'y':
      return '🇾'
    case 'z':
      return '🇿'

    case '0':
      return '0️⃣'
    case '1':
      return '1️⃣'
    case '2':
      return '2️⃣'
    case '3':
      return '3️⃣'
    case '4':
      return '4️⃣'
    case '5':
      return '5️⃣'
    case '6':
      return '6️⃣'
    case '7':
      return '7️⃣'
    case '8':
      return '8️⃣'
    case '9':
      return '9️⃣'

    case '!':
      return '❗'
    case '?':
      return '❓'
    case '+':
      return '➕'
    case '-':
      return '➖'
    case '*':
      return '✖️'
    case '/':
      return '➗'
    case '=':
      return '🟰'
  }

  return char
}

function toArrow(char: string): string {
  switch (char.toLocaleLowerCase()) {
    case 'w':
      return '⬆️'
    case 'a':
      return '⬅️'
    case 's':
      return '⬇️'
    case 'd':
      return '➡️'
    case 'q':
      return '↔️'
    case 'e':
      return '↕️'

    case 't':
      return '↖️'
    case 'f':
      return '↙️'
    case 'g':
      return '↘️'
    case 'h':
      return '↗️'
    case 'r':
      return '↪️'
    case 'y':
      return '↩️'

    case 'i':
      return '🔼'
    case 'j':
      return '◀️'
    case 'k':
      return '🔽'
    case 'l':
      return '▶️'
    case 'u':
      return '⏪'
    case 'o':
      return '⏩'

    case 'p':
      return '🎦'

    case 'z':
      return '⏸️'
    case 'x':
      return '⏹️'
    case 'c':
      return '⏺️'
    case 'v':
      return '⏏️'
    case 'b':
      return '⏯️'
    case 'n':
      return '⏮️'
    case 'm':
      return '⏭️'

    case ',':
      return '🆕'
    case '.':
      return '🆒'
    case ';':
      return '🆓'
    case ':':
      return '🆗'
  }

  return char
}

export function convertText(str: string) {
  return str.split('').map(toText).join('')
}

export function convertArrow(str: string) {
  return str.split('').map(toArrow).join('')
}
