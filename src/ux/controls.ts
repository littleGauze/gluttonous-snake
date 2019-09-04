import { Direction, GameKey } from '../types/index'
import Game from '../game'

export default class Controls {
  public static lastKey: number = null

  public static onKeyUp = (ev: KeyboardEvent): void => { Controls.lastKey = ev.keyCode }

  public static processInput(): void {
    if (!Controls.lastKey || !Game.player) return

    switch (Controls.lastKey) {
      case GameKey.W:
      case GameKey.UP:
        if (Game.player.direction !== Direction.DOWN) {
          // Game.player.direction = Direction.UP
          Game.user.api.control({ direction: Direction.UP })
        }
        break
      case GameKey.S:
      case GameKey.DOWN:
        if (Game.player.direction !== Direction.UP) {
          // Game.player.direction = Direction.DOWN
          Game.user.api.control({ direction: Direction.DOWN })
        }
        break
      case GameKey.A:
      case GameKey.LEFT:
        if (Game.player.direction !== Direction.RIGHT) {
          // Game.player.direction = Direction.LEFT
          Game.user.api.control({ direction: Direction.LEFT })
        }
        break
      case GameKey.D:
      case GameKey.RIGHT:
        if (Game.player.direction !== Direction.LEFT) {
          // Game.player.direction = Direction.RIGHT
          Game.user.api.control({ direction: Direction.RIGHT })
        }
        break
      case GameKey.SPACEBAR:
        // Game.player.jump()
        Game.user.api.control({ skill: GameKey.SPACEBAR })
        break
      default:
        break
    }

    Controls.lastKey = null
  }
}
