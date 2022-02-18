import {useState} from 'react'
import {createModel} from 'hox'

interface IUser {
  userName: string;
  age: number | null;
}

const INIT_USER_INFO: IUser = {
  userName: '',
  age: null
}

export const useSetUserInfo = createModel(() => {
  const [userInfo, setUserInfo] = useState(INIT_USER_INFO)

  const updateUserInfo = (params = {}) => setUserInfo({
    ...userInfo,
    ...params
  })

  return {
    userInfo,
    updateUserInfo
  }
})
