import { GameObject, Position } from '../types/index'
import { Canvas, Board } from '../ux/index'
import Snake from './snake'

export default class Coin implements GameObject {
  public static values: number[] = [200, 600, 800, 1000, 2000]
  public static instances: { [index: number]: Coin } = {}
  public static coinsIndex: number = 0
  public static coinsActive: number = 0

  public index: number
  public value: number
  public position: Position

  public constructor(value: number) {
    this.value = value
    this.index = Coin.coinsIndex
    ++Coin.coinsIndex
    ++Coin.coinsActive
  }

  public static createRandom(): Coin {
    return new Coin(Coin.values[Math.floor(Math.random() * Coin.values.length)])
  }

  public handleCollision(snake: Snake): void {
    snake.points += this.value
    snake.maxLength += 8
    this.destroy()
  }

  public draw(): void {
    if (!this.position) return

    const x = (this.position.X * Board.blockSize) + (Board.blockSize / 2)
    const y = (this.position.Y * Board.blockSize) + (Board.blockSize / 2)
    const r = (Board.blockSize / 2) - 1

    Canvas.context.beginPath()
    Canvas.context.arc(x, y, r, 0, 2 * Math.PI, false)
    Canvas.context.strokeStyle = '#FF0'
    Canvas.context.fillStyle = '#CC0'
    Canvas.context.stroke()
    Canvas.context.fill()
  }

  public destroy(): void {
    Board.removeObjectAt(this.position)
    delete Coin.instances[this.index]
    --Coin.coinsActive
  }
}
