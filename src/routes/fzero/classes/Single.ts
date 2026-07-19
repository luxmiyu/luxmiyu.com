import type Board from './Board'
import Layer from './Layer'

export default class Single extends Layer {
  constructor(board: Board, x: number, y: number) {
    super(board, x, y)
  }
}
