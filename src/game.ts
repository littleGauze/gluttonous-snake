import './assets/css/style.css'
import { Timer, Direction, Speed, Position, User as UserType, RankingItem } from './types/index'
import { Coin, Snake, SpeedCoin } from './objects/index'
import { Board, Canvas, Controls, GUI, User } from './ux/index'
import { Register, RegisterResp, DataSync } from './msg/msg'

enum GameDifficulty { EASY = 300, MEDIUM = 150, DIFFICULT = 50 }

let address = 'ws://localhost:3653'
if (process.env.NODE_ENV === 'production') {
  address = 'ws://localhost:3653'
}
console.log('env ', process.env.NODE_ENV, address)

const rankingList = (players: Snake[]): RankingItem[] => {
  const list = players.map((player: Snake) => ({
    token: player.token,
    name: player.name,
    points: player.points
  }))
  return list.sort((a: RankingItem, b: RankingItem): number => (b.points - a.points))
}

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
  public static authCallback: Function | null

  public static init(): void {
    Canvas.init(document.querySelector('canvas'))

    const body: HTMLBodyElement = document.querySelector('body')
    body.onkeyup = Controls.onKeyUp

    // init socket.io
    const ws: WebSocket = new WebSocket(address)
    Game.syncChannel = ws

    ws.onopen = function (): void {
      // auto login user
      Game.user = User(ws)
      Game.ready()
    }

    ws.onclose = function (): void {
      if (Game.user) {
        Game.user.removeUser()
      }
    }

    ws.onmessage = function (msg: any): void {
      let data
      const file = new FileReader()
      file.readAsText(msg.data)
      file.onload = function (): void {
        data = JSON.parse(this.result as string)
        switch (true) {
          case !!data.RegisterResp:
            if (Game.authCallback != null) {
              Game.authCallback(data.RegisterResp.data)
            }
            break
          case !!data.DataSync:
            Game.loadData(data.DataSync.dataMap)
            Game.onClockTick()
            break
          case !!data.ChatMsg:
            GUI.loadChatMessage(data.ChatMsg)
            break
          default:
            break
        }
      }
    }
  }

  public static loadData(data: any): void {
    data = JSON.parse(`[${data.slice(0, -1)}]`)

    Board.init()

    Game.players = []
    const segments = data.filter((it) => it.clazz === 'SnakeSegment')
    data = data.filter((it) => it.clazz !== 'SnakeSegment')
    data.forEach((it) => {
      const { clazz, ...params } = it
      const Elem = { Coin, Snake, SpeedCoin }[clazz]
      if (!Elem) return
      if (Elem === Snake) {
        params.segments = segments
      }
      const obj = new Elem(params)
      // const user = Game.user.getUser()
      if (clazz === 'Snake') {
        Game.players.push(obj)
        Game.player = obj
      }
      Board.placeObject(obj, params.position)
    })

    // ranking list calculate
    GUI.loadRankingList(rankingList(Game.players))
  }

  public static userAuth(name: string, callback: any): void {
    Game.user.userAuth(name)
    Game.authCallback = callback
  }

  public static createUserChannel(token: string): void {
    console.log(token)
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
