import { User } from '../types/gameobjects'

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

    typer(userChannel: any): any {
      return (text: string): void => {
        console.log('userChannel ', userChannel, text)
        userChannel.emit('chat', { text })
      }
    }
  }
}
