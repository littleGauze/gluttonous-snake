import './assets/css/style.css'
import { ClockTick, Timer, Direction, Speed } from './types/index'
import { Coin, Snake, SpeedCoin } from './objects/index'
import { Board, Canvas, Console, Controls, GUI } from './ux/index'

enum GameDifficulty { EASY = 300, MEDIUM = 150, DIFFICULT = 50 }

export default class Game {
  public static clock: Timer
  public static player: Snake
  public static hiScore: number = 0
  public static isRunning: boolean = false
  public static coinCounter = 0

  public static init(): void {
    Canvas.init(document.querySelector('canvas'))

    const body: HTMLBodyElement = document.querySelector('body')
    body.onkeyup = Controls.onKeyUp

    Game.ready()
  }

  public static ready(): void {
    Console.init()
    Board.init()
    Board.draw()
    GUI.init()
    GUI.draw()

    Game.player = new Snake({ X: 0, Y: 0 })
    Game.player.direction = Direction.RIGHT
    Game.clock = new Timer(GameDifficulty.DIFFICULT, 0, Game.onClockTick)
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
    Game.clock && Game.clock.stop() // eslint-disable-line
    Game.isRunning = false
    Game.ready()
  }

  public static onClockTick(): void {
    Controls.processInput()
    Game.player.processTurn()

    if (Game.clock.tick === ClockTick.EVEN) {
      ++Game.coinCounter
      if (Game.coinCounter >= 2) {
        Game.coinCounter = 0

        if (!Math.floor(Math.random() + 0.5)) {
          const probability = (Coin.coinsActive + 0.5) / 5
          if (!Math.floor(Math.random() + probability)) {
            if (!Math.floor(Math.random() + 0.8)) {
              const coin = Coin.createRandom()
              Board.placeAtRandom(coin)
            } else if (!Math.floor(Math.random() + 0.5)) {
              const speedUpCoin = new SpeedCoin(Speed.FAST)
              Board.placeAtRandom(speedUpCoin)
            } else {
              const speedDownCoin = new SpeedCoin(Speed.SLOW)
              Board.placeAtRandom(speedDownCoin)
            }
          }
        }
      }
    }

    Board.draw()
    GUI.draw()
  }
}

Game.init()
