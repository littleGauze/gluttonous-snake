import { User } from '../types/gameobjects'

export type Register = {
  Register: {
    Name: string
  }
}

export type RegisterResp = {
  RegisterResp: {
    status: boolean
    data: User
  }
}

export type DataSync = {
  DataStync: {
    dataMap: string
  }
}
