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
  public static msgList: HTMLUListElement = null
  public static rankingUl: HTMLUListElement = null

  public static init(): void {
    GUI.buttons.join = document.querySelector('#join') as HTMLButtonElement
    GUI.buttons.send = document.querySelector('#send') as HTMLButtonElement
    GUI.buttons.modal = document.querySelector('#modal') as HTMLButtonElement
    GUI.buttons.auth = document.querySelector('#auth') as HTMLButtonElement
    GUI.username = document.querySelector('#name') as HTMLInputElement
    GUI.userField = document.querySelector('#user') as HTMLSpanElement
    GUI.textInput = document.querySelector('#typeing') as HTMLInputElement
    GUI.msgList = document.querySelector('#msg-list') as HTMLUListElement
    GUI.rankingUl = document.querySelector('#ranking-ul') as HTMLUListElement

    // const userLocal = Game.user.getUser()
    // if (userLocal) {
    //   // set user name
    //   GUI.buttons.join.style.display = 'none'
    //   GUI.userField.innerHTML = `Hi, ${userLocal.name}`
    //   GUI.userField.style.display = 'block'
    // }

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
        GUI.buttons.join.style.display = 'none'
        GUI.userField.innerHTML = `Hi, ${name}`
        GUI.userField.style.display = 'block'
        toggle()
        Game.user.setUser(user)
      })
    }

    const sendMsg = (): void => {
      const user = Game.user.getUser()
      if (!user) {
        toggle()
        return
      }

      // send message
      const text = GUI.textInput.value.trim()
      text && Game.user.api.typer(text)
      GUI.textInput.value = ''
    }

    GUI.textInput.onkeydown = (evt): void => {
      if (evt.keyCode === 13) {
        sendMsg()
      }
    }

    // send message button blicked
    GUI.buttons.send.onclick = sendMsg
  }

  public static loadChatMessage(data: any): void {
    const { name, msg, date } = data
    const li = document.createElement('li')
    const d = new Date(date)
    const time = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    const text = `<span class="nick">${name}:</span>
                    ${msg}
                  <span class="time">${time}</span>
                  `
    li.innerHTML = text
    GUI.msgList.appendChild(li)
    GUI.msgList.parentElement.scrollTop = GUI.msgList.clientHeight
  }

  public static loadRankingList = throttle((data: any): void => {
    let segments = ''
    data.forEach((it, idx) => {
      segments += `<li id='${it.token}'>
        <strong>${idx + 1}.</strong> ${it.name} <span class='points' style='float: right; margin-right: 20px;'>${it.points}</span>
      </li>`
    })
    GUI.rankingUl.innerHTML = segments
  })
}

function throttle(handle: Function, interval: number = 1000): (data: any) => void {
  let lastSyncAt = Date.now()
  return (data: any): void => {
    const now = Date.now()
    if (now - lastSyncAt > interval) {
      handle(data)
      lastSyncAt = now
    }
  }
}
