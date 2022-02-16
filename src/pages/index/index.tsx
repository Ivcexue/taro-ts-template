import React, {useState} from 'react'
// eslint-disable-next-line import/no-named-as-default
import to from "await-to-js";
import {useReady} from '@tarojs/taro'
import {AtButton} from 'taro-ui'
import {View, Text} from '@tarojs/components'
import {userApi} from '@/api'

import '@/plugins/taro-ui'
import './index.scss'

const Index = () => {
  const [count, setCount] = useState<number>(0)

  // 测试请求
  useReady(async () => {
    const [error, data] = await to(userApi.login('joker', '12321312'))
    console.log(error, data, 'error,data...')
  })

  return (
    <View className='index'>
      <Text>Hello world! {count}</Text>
      <AtButton type='primary' size='small' onClick={() => setCount(count + 1)}>Add</AtButton>
    </View>
  )
}

export default Index
