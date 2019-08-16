import Game from '../game'

export default class GUI {
  public static header: HTMLElement
  public static lives: HTMLElement
  public static score: HTMLElement
  public static build: HTMLElement

  public static init(): void {
    GUI.header = document.querySelector('header') as HTMLElement
    GUI.score = document.querySelector('#score') as HTMLElement
    GUI.lives = document.querySelector('#lives') as HTMLElement
    GUI.build = document.querySelector('#build') as HTMLElement
  }

  public static draw(): void {
    GUI.lives.innerText = Game.isRunning
      ? `Lives: ${Game.player.lives}`
      : 'Press Start'

    GUI.score.innerText = Game.isRunning
      ? `Score: ${Game.player.points}`
      : `Hi Score: ${Game.hiScore}`
  }
}
