import colors from './colors'

interface RGB {
  r: number
  g: number
  b: number
}
interface HSL {
  h: number
  s: number
  l: number
}
interface HSV {
  h: number
  s: number
  v: number
}
interface CMYK {
  c: number
  m: number
  y: number
  k: number
}
interface XYZ {
  x: number
  y: number
  z: number
}
interface INT {
  n: number
}

export default class Color {
  r: number
  g: number
  b: number

  constructor(r: number, g: number, b: number) {
    ;[this.r, this.g, this.b] = [r, g, b]
  }

  copy(): Color {
    return new Color(this.r, this.g, this.b)
  }

  static random(): Color {
    return new Color(Math.random() * 255, Math.random() * 255, Math.random() * 255)
  }

  static fromHex(hex: string): Color {
    hex = hex.toLowerCase()

    if (!hex.startsWith('#')) hex = '#' + hex

    if (hex.length === 4) {
      hex = '#' + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3]
    }

    let r = parseInt(hex.slice(1, 3), 16)
    let g = parseInt(hex.slice(3, 5), 16)
    let b = parseInt(hex.slice(5, 7), 16)
    return new Color(r, g, b)
  }

  static fromRGB(rgb: RGB): Color {
    return new Color(rgb.r, rgb.g, rgb.b)
  }

  static fromHSL(hsl: HSL): Color {
    let h = hsl.h / 360
    let s = hsl.s / 100
    let l = hsl.l / 100

    let c = (1 - Math.abs(2 * l - 1)) * s
    let x = c * (1 - Math.abs(((h * 6) % 2) - 1))
    let m = l - c / 2

    let r = 0
    let g = 0
    let b = 0

    if (h < 1 / 6) {
      r = c
      g = x
    } else if (h < 2 / 6) {
      r = x
      g = c
    } else if (h < 3 / 6) {
      g = c
      b = x
    } else if (h < 4 / 6) {
      g = x
      b = c
    } else if (h < 5 / 6) {
      r = x
      b = c
    } else {
      r = c
      b = x
    }

    r = (r + m) * 255
    g = (g + m) * 255
    b = (b + m) * 255

    return new Color(r, g, b)
  }

  static fromHSV(hsv: HSV): Color {
    let h = hsv.h / 360
    let s = hsv.s / 100
    let v = hsv.v / 100

    let c = v * s
    let x = c * (1 - Math.abs(((h * 6) % 2) - 1))
    let m = v - c

    let r = 0
    let g = 0
    let b = 0

    if (h < 1 / 6) {
      r = c
      g = x
    } else if (h < 2 / 6) {
      r = x
      g = c
    } else if (h < 3 / 6) {
      g = c
      b = x
    } else if (h < 4 / 6) {
      g = x
      b = c
    } else if (h < 5 / 6) {
      r = x
      b = c
    } else {
      r = c
      b = x
    }

    r = (r + m) * 255
    g = (g + m) * 255
    b = (b + m) * 255

    return new Color(r, g, b)
  }

  static fromCMYK(cmyk: CMYK): Color {
    let c = cmyk.c
    let m = cmyk.m
    let y = cmyk.y
    let k = cmyk.k

    c /= 100
    m /= 100
    y /= 100
    k /= 100

    c = c * (1 - k) + k
    m = m * (1 - k) + k
    y = y * (1 - k) + k

    let r = 1 - c
    let g = 1 - m
    let b = 1 - y

    r = Math.round(255 * r)
    g = Math.round(255 * g)
    b = Math.round(255 * b)

    return new Color(r, g, b)
  }

  static fromXYZ(xyz: XYZ): Color {
    let x = xyz.x
    let y = xyz.y
    let z = xyz.z

    let r = x * 3.2406 + y * -1.5372 + z * -0.4986
    let g = x * -0.9689 + y * 1.8758 + z * 0.0415
    let b = x * 0.0557 + y * -0.204 + z * 1.057

    r = r > 0.0031308 ? 1.055 * r ** (1 / 2.4) - 0.055 : 12.92 * r
    g = g > 0.0031308 ? 1.055 * g ** (1 / 2.4) - 0.055 : 12.92 * g
    b = b > 0.0031308 ? 1.055 * b ** (1 / 2.4) - 0.055 : 12.92 * b

    r = Math.max(0, Math.min(1, r)) * 255
    g = Math.max(0, Math.min(1, g)) * 255
    b = Math.max(0, Math.min(1, b)) * 255

    return new Color(r, g, b)
  }

  static fromINT(int: INT): Color {
    let hex = int.n.toString(16).padStart(6, '0')
    return Color.fromHex(hex)
  }

  toRGB(): RGB {
    return { r: this.r, g: this.g, b: this.b }
  }

  toHSL(): HSL {
    let r = this.r / 255
    let g = this.g / 255
    let b = this.b / 255

    let max = Math.max(r, g, b)
    let min = Math.min(r, g, b)
    let c = max - min

    let h = 0
    if (c === 0) {
      h = 0
    } else if (max === r) {
      h = ((g - b) / c) % 6
    } else if (max === g) {
      h = (b - r) / c + 2
    } else if (max === b) {
      h = (r - g) / c + 4
    }
    h *= 60
    if (h < 0) h += 360

    let l = (max + min) / 2

    let s = 0
    if (c !== 0) {
      s = c / (1 - Math.abs(2 * l - 1))
    }

    s *= 100
    l *= 100

    return { h, s, l }
  }

  toHSV(): HSV {
    let r = this.r / 255
    let g = this.g / 255
    let b = this.b / 255

    let max = Math.max(r, g, b)
    let min = Math.min(r, g, b)
    let c = max - min

    let h = 0
    if (c === 0) {
      h = 0
    } else if (max === r) {
      h = ((g - b) / c) % 6
    } else if (max === g) {
      h = (b - r) / c + 2
    } else if (max === b) {
      h = (r - g) / c + 4
    }
    h *= 60
    if (h < 0) h += 360

    let v = max

    let s = 0
    if (c !== 0) {
      s = c / v
    }

    s *= 100
    v *= 100

    return { h, s, v }
  }

  toCMYK(): CMYK {
    let r = this.r / 255
    let g = this.g / 255
    let b = this.b / 255

    let k = 1 - Math.max(r, g, b)
    let c = (1 - r - k) / (1 - k)
    let m = (1 - g - k) / (1 - k)
    let y = (1 - b - k) / (1 - k)

    return { c, m, y, k }
  }

  toXYZ(): XYZ {
    let r = this.r / 255
    let g = this.g / 255
    let b = this.b / 255

    r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92
    g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92
    b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92

    let x = r * 0.4124 + g * 0.3576 + b * 0.1805
    let y = r * 0.2126 + g * 0.7152 + b * 0.0722
    let z = r * 0.0193 + g * 0.1192 + b * 0.9505

    return { x, y, z }
  }

  toINT(): INT {
    return { n: parseInt(this.toString(false), 16) }
  }

  toString(tag = true): string {
    let r = Math.round(this.r).toString(16).padStart(2, '0')
    let g = Math.round(this.g).toString(16).padStart(2, '0')
    let b = Math.round(this.b).toString(16).padStart(2, '0')

    if (tag) return `#${r}${g}${b}`
    else return `${r}${g}${b}`
  }

  toStringHex = this.toString

  toStringRGB(tag = true): string {
    let rgb = this.toRGB()
    if (tag)
      return `rgb(${rgb.r.toLocaleString(undefined, { maximumFractionDigits: 0 })}, ${rgb.g.toLocaleString(undefined, { maximumFractionDigits: 0 })}, ${rgb.b.toLocaleString(undefined, { maximumFractionDigits: 0 })})`
    else
      return `${rgb.r.toLocaleString(undefined, { maximumFractionDigits: 0 })}, ${rgb.g.toLocaleString(undefined, { maximumFractionDigits: 0 })}, ${rgb.b.toLocaleString(undefined, { maximumFractionDigits: 0 })}`
  }

  toStringHSL(tag = true): string {
    let hsl = this.toHSL()
    if (tag)
      return `hsl(${hsl.h.toLocaleString(undefined, { maximumFractionDigits: 1 })}, ${hsl.s.toLocaleString(undefined, { maximumFractionDigits: 1 })}%, ${hsl.l.toLocaleString(undefined, { maximumFractionDigits: 1 })}%)`
    else
      return `${hsl.h.toLocaleString(undefined, { maximumFractionDigits: 1 })}, ${hsl.s.toLocaleString(undefined, { maximumFractionDigits: 1 })}%, ${hsl.l.toLocaleString(undefined, { maximumFractionDigits: 1 })}%`
  }

  toStringHSV(tag = true): string {
    let hsv = this.toHSV()
    if (tag)
      return `hsv(${hsv.h.toLocaleString(undefined, { maximumFractionDigits: 1 })}, ${hsv.s.toLocaleString(undefined, { maximumFractionDigits: 1 })}%, ${hsv.v.toLocaleString(undefined, { maximumFractionDigits: 1 })}%)`
    else
      return `${hsv.h.toLocaleString(undefined, { maximumFractionDigits: 1 })}, ${hsv.s.toLocaleString(undefined, { maximumFractionDigits: 1 })}%, ${hsv.v.toLocaleString(undefined, { maximumFractionDigits: 1 })}%`
  }

  toStringCMYK(tag = true): string {
    let cmyk = this.toCMYK()
    if (tag)
      return `cmyk(${(cmyk.c * 100).toLocaleString(undefined, { maximumFractionDigits: 1 })}%, ${(cmyk.m * 100).toLocaleString(undefined, { maximumFractionDigits: 1 })}%, ${(cmyk.y * 100).toLocaleString(undefined, { maximumFractionDigits: 1 })}%, ${(cmyk.k * 100).toLocaleString(undefined, { maximumFractionDigits: 1 })}%)`
    else
      return `${(cmyk.c * 100).toLocaleString(undefined, { maximumFractionDigits: 1 })}%, ${(cmyk.m * 100).toLocaleString(undefined, { maximumFractionDigits: 1 })}%, ${(cmyk.y * 100).toLocaleString(undefined, { maximumFractionDigits: 1 })}%, ${(cmyk.k * 100).toLocaleString(undefined, { maximumFractionDigits: 1 })}%`
  }

  toStringXYZ(tag = true): string {
    let xyz = this.toXYZ()
    if (tag)
      return `xyz(${xyz.x.toLocaleString(undefined, { maximumFractionDigits: 3 })}, ${xyz.y.toLocaleString(undefined, { maximumFractionDigits: 3 })}, ${xyz.z.toLocaleString(undefined, { maximumFractionDigits: 3 })})`
    else
      return `${xyz.x.toLocaleString(undefined, { maximumFractionDigits: 3 })}, ${xyz.y.toLocaleString(undefined, { maximumFractionDigits: 3 })}, ${xyz.z.toLocaleString(undefined, { maximumFractionDigits: 3 })}`
  }

  toStringINT(tag = true): string {
    let int = this.toINT()
    if (tag) return `int(${int.n})`
    else return `${int.n}`
  }

  setRGB(rgb: Partial<RGB>) {
    ;[this.r, this.g, this.b] = [rgb.r ?? this.r, rgb.g ?? this.g, rgb.b ?? this.b]
    return this
  }

  setHSL(hsl: Partial<HSL>) {
    let rgb = Color.fromHSL({ ...this.toHSL(), ...hsl }).toRGB()
    ;[this.r, this.g, this.b] = [rgb.r, rgb.g, rgb.b]
    return this
  }

  setHSV(hsv: Partial<HSV>) {
    let rgb = Color.fromHSV({ ...this.toHSV(), ...hsv }).toRGB()
    ;[this.r, this.g, this.b] = [rgb.r, rgb.g, rgb.b]
    return this
  }

  setCMYK(cmyk: Partial<CMYK>) {
    let rgb = Color.fromCMYK({ ...this.toCMYK(), ...cmyk }).toRGB()
    ;[this.r, this.g, this.b] = [rgb.r, rgb.g, rgb.b]
    return this
  }

  setXYZ(xyz: Partial<XYZ>) {
    let rgb = Color.fromXYZ({ ...this.toXYZ(), ...xyz }).toRGB()
    ;[this.r, this.g, this.b] = [rgb.r, rgb.g, rgb.b]
    return this
  }

  get(): RGB
  get(mode: 'rgb'): RGB
  get(mode: 'hsl'): HSL
  get(mode: 'hsv'): HSV
  get(mode: 'cmyk'): CMYK
  get(mode: 'xyz'): XYZ
  get(mode: 'rgb' | 'hsl' | 'hsv' | 'cmyk' | 'xyz' = 'rgb'): RGB | HSL | HSV | CMYK | XYZ {
    switch (mode) {
      case 'rgb':
        return this.toRGB()
      case 'hsl':
        return this.toHSL()
      case 'hsv':
        return this.toHSV()
      case 'cmyk':
        return this.toCMYK()
      case 'xyz':
        return this.toXYZ()
    }
  }

  set(
    object: Partial<RGB | HSL | HSV | CMYK | XYZ>,
    mode: 'rgb' | 'hsl' | 'hsv' | 'cmyk' | 'xyz' = 'rgb'
  ) {
    // assume object and mode are valid
    let rgb = this.toRGB()

    switch (mode) {
      case 'rgb':
        rgb = Color.fromRGB({ ...this.toRGB(), ...object }).toRGB()
        break
      case 'hsl':
        rgb = Color.fromHSL({ ...this.toHSL(), ...object }).toRGB()
        break
      case 'hsv':
        rgb = Color.fromHSV({ ...this.toHSV(), ...object }).toRGB()
        break
      case 'cmyk':
        rgb = Color.fromCMYK({ ...this.toCMYK(), ...object }).toRGB()
        break
      case 'xyz':
        rgb = Color.fromXYZ({ ...this.toXYZ(), ...object }).toRGB()
        break
    }

    ;[this.r, this.g, this.b] = [rgb.r, rgb.g, rgb.b]
  }

  distanceTo(color: Color): number {
    let r = this.r - color.r
    let g = this.g - color.g
    let b = this.b - color.b
    return Math.sqrt(r * r + g * g + b * b)
  }

  distanceSquaredTo(color: Color): number {
    let r = this.r - color.r
    let g = this.g - color.g
    let b = this.b - color.b
    return r * r + g * g + b * b
  }

  getClosest(): { name: string; hex: string; rgb: number[] } {
    let closestColor = colors[0]
    let closestDistance = this.distanceSquaredTo(Color.fromHex(closestColor.hex))

    for (let i = 1; i < colors.length; i++) {
      let distance = this.distanceSquaredTo(Color.fromHex(colors[i].hex))

      if (distance < closestDistance) {
        closestColor = colors[i]
        closestDistance = distance
      }
    }

    return closestColor
  }

  getContrastingTextColor(): Color {
    // calculate brightness using the ITU-R BT.601 formula
    const brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1000
    return brightness > 128 ? Color.fromHex('#000000') : Color.fromHex('#ffffff')
  }
}
