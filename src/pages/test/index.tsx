import React from 'react'
import {getCurrentInstance} from "@tarojs/taro";
import {View, Text} from '@tarojs/components'
import {useSetUserInfo} from "@/store";

import '@/plugins/taro-ui'
import './index.scss'

const Test = () => {
  const {userInfo} = useSetUserInfo();
  const {router} = getCurrentInstance();

  console.log('router instance:',router)

  return (
    <View className='index'>
      <Text>userName: {userInfo.userName}, age: {userInfo.age}</Text>
    </View>
  )
}

export default Test
