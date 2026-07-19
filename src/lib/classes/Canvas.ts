import error from "$lib/util/error"

export default class Canvas {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.ctx = canvas.getContext("2d") ?? error("CanvasRenderingContext2D is null")
  }

  private stroke(): Canvas {
    this.ctx.stroke()
    this.ctx.restore()
    return this
  }

  private fill(): Canvas {
    this.ctx.fill()
    this.ctx.restore()
    return this
  }

  resize(width: number, height: number): Canvas {
    this.canvas.width = width
    this.canvas.height = height

    return this
  }

  clear(): Canvas {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    return this
  }

  drawLine(x0: number, y0: number, x1: number, y1: number, color: string, width: number): Canvas {
    this.ctx.beginPath()
    this.ctx.strokeStyle = color
    this.ctx.lineWidth = width
    this.ctx.moveTo(x0, y0)
    this.ctx.lineTo(x1, y1)

    return this.stroke()
  }

  drawCircle(x: number, y: number, radius: number, color: string, width: number = 0) {
    this.ctx.beginPath()
    this.ctx.arc(x, y, radius, 0, Math.PI * 2)

    this.ctx.fillStyle = color
    this.ctx.strokeStyle = color
    this.ctx.lineWidth = width

    if (width === 0) {
      return this.fill()
    } else {
      return this.stroke()
    }
  }
}
