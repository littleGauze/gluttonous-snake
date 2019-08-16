import { GameObject, Position } from '../types/index'
import { Canvas, Board } from '../ux/index'
import Snake from './snake'

export default class SnakeSegment implements GameObject {
  public static colors: string[] = [
    '#FF0000', '#FF9966',
    '#FFFA66', '#66FF66',
    '#66FFFD', '#6699FF',
    '#7966FF', '#F366FF'
  ]

  public position: Position
  public colorIndex: number = -1

  public constructor(position: Position) {
    this.position = position
  }

  public draw(): void {
    const sx = (this.position.X * Board.blockSize)
    const sy = (this.position.Y * Board.blockSize)
    const size = Board.blockSize

    Canvas.fillRect(sx, sy, size, size, this.getColor())
  }

  public getColor(): string {
    const len: number = SnakeSegment.colors.length
    this.colorIndex++
    return SnakeSegment.colors[this.colorIndex % len]
  }

  public handleCollision(snake: Snake): void {
    snake.die()
  }
}
