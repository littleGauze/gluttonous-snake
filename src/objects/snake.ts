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
  public static defaultLength = 3
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
  public token: string

  constructor({ position, segments, speed, maxLength, direction, token, name, points }: {
    name: string
    token: string
    position: Position
    points: number
    segments: [SnakeSegment]
    maxLength?: number
    speed?: Speed
    direction?: Direction
  }) {
    super(position)
    this.segments[0] = this
    this.isAlive = true
    this.name = name
    this.maxLength = maxLength
    this.speed = speed
    this.direction = direction
    this.token = token
    this.points = points

    if (position) {
      Board.placeObject(this, position)
      if (segments.length) {
        segments.forEach(({ position: pos }) => {
          const newPos = new Position(pos.X, pos.Y)
          const newSegment = new SnakeSegment(newPos)
          this.segments.push(newSegment)
          Board.placeObject(newSegment, newPos)
        })
      }
    }
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
    const pos: Position = Position.copy(this.position)
    this.updateBoard(pos)
  }

  public updateBoard(pos: Position): void {
    // do nothing
  }

  public destroy(): void {
    for (let i = 0, s = this.segments.length; i !== s; i++) {
      Board.removeObjectAt(this.segments[i].position)
    }

    this.segments = [this]
    this.maxLength = this.maxLength
  }
}
