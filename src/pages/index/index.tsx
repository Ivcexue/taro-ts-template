import React from 'react'
import to from "await-to-js";
import Taro, {useReady, usePullDownRefresh} from '@tarojs/taro'
import {AtButton, AtMessage} from 'taro-ui'
import {View, Text} from '@tarojs/components'
import {useSetUserInfo} from "@/store";

import {userApi} from '@/api'

import '@/plugins/taro-ui'
import './index.scss'

const Index = () => {
  const {userInfo, updateUserInfo} = useSetUserInfo();

  // 测试请求
  useReady(async () => {
    const [_, data] = await to(userApi.login('joker', '12321312'))
    if (data) {
      await updateUserInfo(data[0] || {})
    }
  })

  usePullDownRefresh(() => {
    console.log('下拉刷新')
  })

  const handleAddClick = async () => {
    updateUserInfo({
      userName: 'pg',
      age: 10
    })

    await Taro.switchTab({
      url: '/pages/test/index'
    })
  }

  return (
    <View className='index'>
      <AtMessage />
      <Text>useName: {userInfo.userName}, age: {userInfo.age}</Text>
      <AtButton className='test-button' type='primary' size='small' onClick={handleAddClick}>更新store</AtButton>
    </View>
  )
}

export default Index
