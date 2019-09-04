import './assets/css/style.css'
import * as io from 'socket.io-client'
import { Timer, Direction, Speed, Position, User as UserType } from './types/index'
import { Coin, Snake, SpeedCoin } from './objects/index'
import { Board, Canvas, Controls, GUI, User } from './ux/index'

enum GameDifficulty { EASY = 300, MEDIUM = 150, DIFFICULT = 50 }
const address = 'http://localhost:3001'

export default class Game {
  public static clock: Timer
  public static player: Snake
  public static user: any
  public static hiScore: number = 0
  public static isRunning: boolean = false
  public static coinCounter = 0
  public static players: Array<Snake> = []
  public static syncChannel: any
  public static commonChannel: any
  public static userChannel: any

  public static init(): void {
    Canvas.init(document.querySelector('canvas'))

    const body: HTMLBodyElement = document.querySelector('body')
    body.onkeyup = Controls.onKeyUp

    // init socket.io
    Game.syncChannel = io(`${address}/sync`, { forceNew: true })
    Game.commonChannel = io(`${address}/common`, { forceNew: true })

    Game.syncChannel.on('turn', (msg: any) => {
      Game.loadData(msg.data)
      Game.onClockTick()
    })
    Game.commonChannel.on('chat', (msg: any) => {
      GUI.loadChatMessage(msg)
    })

    // auto login user
    Game.user = User(Game.commonChannel)
    const user = Game.user.getUser()
    if (user) {
      Game.createUserChannel(user.token)
    }

    Game.ready()
  }

  public static loadData(data: any): void {
    Board.init()
    Object.keys(data).forEach((key) => {
      const [cx, cy] = key.split('-')
      const { clazz, ...params } = data[key]
      const Elem = { Coin, Snake, SpeedCoin }[clazz]
      const pos = new Position(parseInt(cx, 10), parseInt(cy, 10))
      const obj = new Elem({ position: pos, ...params })
      const p = Game.players.find((p: Snake) => p.token === params.token)
      const user = Game.user.getUser()
      if (clazz === 'Snake') {
        if (!p) {
          Game.players.push(obj)
        }
        
        if (user && user.token === obj.token) {
          Game.player = obj
        }
      }
      Board.placeObject(obj, pos)
    })
  }

  public static userAuth(name: string, callback: any): void {
    Game.user.userAuth(name).then((user: UserType) => {
      callback(user)
    })
  }

  public static createUserChannel(token: string): void {
    Game.userChannel = io(`${address}/users?token=${token}`, { forceNew: true })
    Game.user.api = Game.user.api(Game.userChannel)
  }

  public static ready(): void {
    Board.init()
    Board.draw()
    GUI.init()
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
  }

  public static reset(): void {
    Game.isRunning = false
    Game.ready()
  }

  public static onClockTick(): void {
    Controls.processInput()
    Game.players.forEach((player) => player.processTurn())

    Board.draw()
  }
}

Game.init()
