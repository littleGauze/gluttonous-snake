import Game from '../game'
import SnakeSegment from './snakeSegment'
import { Board } from '../ux/index'
import {
  Speed,
  Direction,
  Position,
  ScreenEdge,
  ClockTick,
  PlayerObject,
  GameObject
} from '../types/index'

export default class Snake extends SnakeSegment implements PlayerObject {
  public static defaultLength = 12
  public jumpDistance: number = 8

  public skipNextTurn: boolean = false
  public hitDetected: boolean = false
  public isAlive: boolean = false

  public speed: Speed = Speed.SLOW
  public direction: Direction = Direction.NONE
  public position: Position

  public hiScore: number = 0
  public points: number = 0
  public lives: number = 999

  public name: string
  public segments: SnakeSegment[] = []
  public maxLength: number = Snake.defaultLength

  constructor(position: Position) {
    super(position)
    this.segments[0] = this
    this.isAlive = true
    this.name = 'nealli'

    Board.placeObject(this, position)
  }

  public jump(): void {
    const position: Position = Position.copy(this.position)

    switch (this.direction) {
      case Direction.UP:
        position.Y -= this.jumpDistance
        break
      case Direction.DOWN:
        position.Y += this.jumpDistance
        break
      case Direction.LEFT:
        position.X -= this.jumpDistance
        break
      case Direction.RIGHT:
        position.X += this.jumpDistance
        break
      default:
        console.log('unknown direction ', this.direction)
        break
    }

    this.updateBoard(position)
  }

  public onHitScreenEdge(edge: ScreenEdge): void {
    // switch (edge) {
    //   case ScreenEdge.NORTH:
    //   case ScreenEdge.SOUTH:
    //   case ScreenEdge.EAST:
    //   case ScreenEdge.WEST:
    // }
  }

  public die(): void {
    this.hitDetected = true
    this.hiScore = this.points > this.hiScore ? this.points : this.hiScore
    Game.hiScore = this.hiScore > Game.hiScore ? this.hiScore : Game.hiScore

    if (!this.lives) {
      this.isAlive = false
      Game.reset()
      return
    }

    --this.lives
    this.destroy()

    this.position = new Position(0, 0)
    this.direction = Direction.NONE
  }

  public setSpeed(speed: Speed): void {
    this.speed = speed
    this.skipNextTurn = (speed === Speed.SLOW)
  }

  public processTurn(): void {
    if (!this.isAlive) return

    // Skip every other clock tick unless moving fast
    if (this.speed !== Speed.FAST && Game.clock.tick === ClockTick.ODD) return

    // Skip 3 clock tick if moving slow
    if (this.speed === Speed.SLOW && Game.clock.tick === ClockTick.EVEN) {
      this.skipNextTurn = !this.skipNextTurn
      if (this.skipNextTurn) return
    }

    this.hitDetected = false

    let isMoving = true
    const pos: Position = Position.copy(this.position)
    switch (this.direction) {
      case Direction.UP:
        pos.Y -= 1
        break
      case Direction.DOWN:
        pos.Y += 1
        break
      case Direction.LEFT:
        pos.X -= 1
        break
      case Direction.RIGHT:
        pos.X += 1
        break
      default:
        // Direction.NONE
        isMoving = false
        break
    }

    if (isMoving) {
      if (pos.X < 0) {
        pos.X = Board.width - 1
      } else if (pos.Y < 0) {
        pos.Y = Board.height - 1
      } else if (pos.X === Board.width) {
        pos.X = 0
      } else if (pos.Y === Board.height) {
        pos.Y = 0
      }

      if (Board.grid[pos.X][pos.Y]) {
        const object: GameObject = Board.grid[pos.X][pos.Y] as GameObject
        object.handleCollision(this)
      }

      if (!this.isAlive) {
        this.destroy()
      } else if (!this.hitDetected) {
        this.updateBoard(pos)
      }
    }
  }

  public updateBoard(pos: Position): void {
    let lastPosition = Position.copy(this.position)
    for (let i = 0, s = this.segments.length; i !== s; i++) {
      const segment = this.segments[i]
      const newPosition = (i === 0) ? pos : lastPosition

      lastPosition = segment.position
      Board.moveObject(segment, newPosition)
    }

    if (this.segments.length <= this.maxLength) {
      const newSegment = new SnakeSegment(lastPosition)
      this.segments.push(newSegment)
      Board.placeObject(newSegment, lastPosition)
    }
  }

  public destroy(): void {
    for (let i = 0, s = this.segments.length; i !== s; i++) {
      Board.removeObjectAt(this.segments[i].position)
    }

    this.segments = [this]
    this.maxLength = Snake.defaultLength
  }
}
