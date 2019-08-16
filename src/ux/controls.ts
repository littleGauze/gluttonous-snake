import { Direction, GameKey } from '../types/index'
import Game from '../game'

export default class Controls {
  public static lastKey: number = null

  public static onKeyUp = (ev: KeyboardEvent): void => { Controls.lastKey = ev.keyCode }

  public static processInput(): void {
    if (!Controls.lastKey) return

    switch (Controls.lastKey) {
      case GameKey.UP:
        if (Game.player.direction !== Direction.DOWN) {
          Game.player.direction = Direction.UP
        }
        break
      case GameKey.DOWN:
        if (Game.player.direction !== Direction.UP) {
          Game.player.direction = Direction.DOWN
        }
        break
      case GameKey.LEFT:
        if (Game.player.direction !== Direction.RIGHT) {
          Game.player.direction = Direction.LEFT
        }
        break
      case GameKey.RIGHT:
        if (Game.player.direction !== Direction.LEFT) {
          Game.player.direction = Direction.RIGHT
        }
        break
      case GameKey.SPACEBAR:
        Game.player.jump()
        break
      default:
        break
    }

    Controls.lastKey = null
  }
}
