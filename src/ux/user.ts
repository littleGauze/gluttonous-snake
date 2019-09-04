import { User, Direction, GameKey } from '../types/index'

export default (commonChannel: any): object => {
  console.log('user')

  return {
    userAuth(name: string): Promise<User|Error> {
      return new Promise((resolve, reject): void => {
        console.log('authentication ===> ', name, commonChannel)
        commonChannel.emit('authentication', { name }, (user: User) => {
          if (user) {
            // save to localstorage
            window.localStorage.setItem('snake:user', JSON.stringify(user))

            resolve(user)
          } else {
            reject(new Error('Unauthorize!'))
          }
        })
      })
    },

    getUser(): User {
      const user = JSON.parse(window.localStorage.getItem('snake:user')) as User
      return user
    },

    api(userChannel: any): any {
      return {
        typer(text: string): void {
          userChannel.emit('chat', { text })
        },

        control(op: { direction?: Direction, skill?: GameKey }): void {
          userChannel.emit('control', op)
        }
      }
    }
  }
}
