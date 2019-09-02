import './assets/css/style.css'
import * as io from 'socket.io-client'
import { Timer, Direction, Speed, Position } from './types/index'
import { Coin, Snake, SpeedCoin } from './objects/index'
import { Board, Canvas, Console, Controls, GUI } from './ux/index'

enum GameDifficulty { EASY = 300, MEDIUM = 150, DIFFICULT = 50 }

export default class Game {
  public static clock: Timer
  public static player: Snake
  public static hiScore: number = 0
  public static isRunning: boolean = false
  public static coinCounter = 0
  public static players: Array<Snake> = []
  public static sync: any
  public static chat: any
  public static control: any

  public static init(): void {
    Canvas.init(document.querySelector('canvas'))

    const body: HTMLBodyElement = document.querySelector('body')
    body.onkeyup = Controls.onKeyUp

    Game.ready()

    // init socket.io
    Game.sync = io('http://localhost:3001/sync')
    Game.chat = io('http://localhost:3001/chat')
    Game.control = io('http://localhost:3001/control')
    Game.sync.on('turn', (msg: any) => {
      console.log(msg.data)
      Game.loadData(msg.data)
      Game.onClockTick()
    })
    Game.chat.on('text', (msg: any) => {
      console.log('client get text msg ', msg)
    })
  }

  public static loadData(data: any): void {
    Board.init()
    Object.keys(data).forEach((key) => {
      const [cx, cy] = key.split('-')
      const { clazz, ...params } = data[key]
      const Elem = { Coin, Snake, SpeedCoin }[clazz]
      const pos = new Position(parseInt(cx, 10), parseInt(cy, 10))
      const obj = new Elem({ position: pos, ...params })
      if (clazz === 'Snake' && !Game.players.find((p) => p.name === params.name)) {
        Game.players.push(obj)
      }
      Board.placeObject(obj, pos)
    })
  }

  public static ready(): void {
    Console.init()
    Board.init()
    Board.draw()
    GUI.init()
    GUI.draw()
  }

  public static start(): void {
    if (Game.isRunning) return
    if (Game.clock.isPaused) {
      Game.pause()
      return
    }

    Game.isRunning = true
    Game.clock.start()
  }

  public static pause(): void {
    if (Game.clock.isPaused) {
      Game.isRunning = true
      Game.clock.resume()
      return
    }

    Game.clock.pause()
    Game.isRunning = false
    GUI.draw()
  }

  public static reset(): void {
    Game.isRunning = false
    Game.ready()
  }

  public static onClockTick(): void {
    Controls.processInput()
    Game.players.forEach((player) => player.processTurn())

    Board.draw()
    GUI.draw()
  }
}

Game.init()
