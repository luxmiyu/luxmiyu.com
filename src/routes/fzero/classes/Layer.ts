import Board from './Board'

export default abstract class Layer {
  public x: number
  public y: number
  protected board: Board

  constructor(board: Board, x: number, y: number) {
    this.x = x
    this.y = y
    this.board = board
  }
}
