import {useState} from 'react'
import {createModel} from 'hox'
import {IUserInfo} from "@/types/user";

const INIT_USER_INFO: IUserInfo = {
  userName: '',
  age: null
}

export const useSetUserInfo = createModel(() => {
  const [userInfo, setUserInfo] = useState(INIT_USER_INFO)

  const updateUserInfo = (params: IUserInfo) => setUserInfo({
    ...userInfo,
    ...params
  })

  return {
    userInfo,
    updateUserInfo
  }
})
