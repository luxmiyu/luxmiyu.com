import type Layer from './Layer'

export default class Board {
  public layers: Layer[]

  public sizeX: number
  public sizeY: number

  public cameraX: number
  public cameraY: number
  public cameraZoom: number

  constructor() {
    this.layers = []

    this.sizeX = 0
    this.sizeY = 0

    this.cameraX = 0
    this.cameraY = 0
    this.cameraZoom = 1
  }
}
