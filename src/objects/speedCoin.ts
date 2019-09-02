import { Board, Canvas } from '../ux/index'
import { Speed, Position } from '../types/index'
import Coin from './coin'
import Snake from './snake'

export default class SpeedCoin {
  public static colors: string[] = ['#3366FF', '#FF1400']
  public static instances: { [index: number]: Coin } = {}
  public static itemsIndex: number = 0
  public static itemsActive: number = 0

  public index: number
  public color: string
  public speed: Speed
  public position: Position

  public constructor({ speed }: { speed: Speed }) {
    this.speed = speed
    this.color = SpeedCoin.colors[this.speed]
    this.index = SpeedCoin.itemsIndex
    ++SpeedCoin.itemsIndex
    ++SpeedCoin.itemsActive
  }

  public handleCollision(snake: Snake): void {
    snake.setSpeed(this.speed)
    this.destroy()
  }

  public draw(): void {
    if (!this.position) return

    const x = (this.position.X * Board.blockSize) + 2
    const y = (this.position.Y * Board.blockSize) + 2
    const size = Board.blockSize - 4

    Canvas.drawRect(x, y, size, size, this.color)
  }

  public destroy(): void {
    Board.removeObjectAt(this.position)
    delete SpeedCoin.instances[this.index]
    --SpeedCoin.itemsActive
  }
}
