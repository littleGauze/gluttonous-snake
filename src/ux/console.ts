import Game from '../game'

interface Buttons {
  start: HTMLButtonElement
  pause: HTMLButtonElement
  reset: HTMLButtonElement
}

export default class Console {
  public static buttons: Buttons = {
    start: null,
    pause: null,
    reset: null
  }

  public static init(): void {
    Console.buttons.start = document.querySelector('#start') as HTMLButtonElement
    Console.buttons.pause = document.querySelector('#pause') as HTMLButtonElement
    Console.buttons.reset = document.querySelector('#reset') as HTMLButtonElement

    Console.buttons.start.onclick = (): void => Game.start()
    Console.buttons.pause.onclick = (): void => Game.pause()
    Console.buttons.reset.onclick = (): void => Game.reset()
  }
}
