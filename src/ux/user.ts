import { User, Direction, GameKey } from '../types/index'
import { Register } from '../msg/msg'

export default (channel: any): object => {
  const apis = {
    userAuth(name: string): void {
      console.log('authentication ===> ', name)
      const reg: Register = { Register: { Name: name } }
      channel.send(JSON.stringify(reg))
    },

    setUser(user: User): void {
      const u = JSON.stringify(user)
      window.localStorage.setItem('snake:user', u)
    },

    getUser(): User {
      const user = JSON.parse(window.localStorage.getItem('snake:user')) as User
      return user
    },

    removeUser(): void {
      window.localStorage.removeItem('snake:user')
      window.location.reload()
    },

    api: {
      typer(text: string): void {
        channel.send(JSON.stringify({ ChatMsg: { msg: text } }))
      },

      control(op: { direction?: Direction; skill?: GameKey }): void {
        channel.send(JSON.stringify({ GameControl: op }))
      }
    }
  }

  // commonChannel.on('logout', ({ token }: any) => {
  //   const user = apis.getUser()
  //   if (token === user.token) {
  //     apis.removeUser()
  //   }
  // })

  return apis
}
