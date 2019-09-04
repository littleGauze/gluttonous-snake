import Game from '../game'
import { User } from '../types/gameobjects'

interface Buttons {
  join: HTMLButtonElement
  send: HTMLButtonElement
  modal: HTMLButtonElement
  auth: HTMLButtonElement
}

export default class GUI {
  public static buttons: Buttons = {
    join: null,
    send: null,
    modal: null,
    auth: null
  }

  public static username: HTMLInputElement = null
  public static textInput: HTMLInputElement = null
  public static userField: HTMLSpanElement = null

  public static init(): void {
    GUI.buttons.join = document.querySelector('#join') as HTMLButtonElement
    GUI.buttons.send = document.querySelector('#send') as HTMLButtonElement
    GUI.buttons.modal = document.querySelector('#modal') as HTMLButtonElement
    GUI.buttons.auth = document.querySelector('#auth') as HTMLButtonElement
    GUI.username = document.querySelector('#name') as HTMLInputElement
    GUI.userField = document.querySelector('#user') as HTMLSpanElement
    GUI.textInput = document.querySelector('#typeing') as HTMLInputElement

    const userLocal = Game.player.getUser()
    if (userLocal) {
      // set user name
      GUI.buttons.join.style.display = 'none'
      GUI.userField.innerHTML = `Hi, ${userLocal.name}`
      GUI.userField.style.display = 'block'
    }

    const toggle = (): void => {
      const { display } = GUI.buttons.modal.style
      GUI.buttons.modal.style.display = display === 'block' ? 'none' : 'block'
    }

    // join button clicked
    GUI.buttons.join.onclick = toggle

    // auth clicked
    GUI.buttons.auth.onclick = (): void => {
      // do the auth
      const name = GUI.username.value
      Game.userAuth(name, (user: User) => {
        Game.createUserChannel(user.token)
        GUI.buttons.join.style.display = 'none'
        GUI.userField.innerHTML = `Hi, ${name}`
        GUI.userField.style.display = 'block'
        toggle()
      })
    }

    // send message button blicked
    GUI.buttons.send.onclick = (): void => {
      const user = Game.player.getUser()
      if (!user) {
        toggle()
        return
      }

      // send message
      const text = GUI.textInput.value.trim()
      Game.player.typer(text)
    }
  }
}
