import React, {useState} from 'react'
import to from "await-to-js";
import Taro, {useReady, usePullDownRefresh} from '@tarojs/taro'
import {AtButton, AtMessage} from 'taro-ui'
import {View, Text} from '@tarojs/components'
import {useSetUserInfo} from "@/store";
import Skeleton from 'taro-skeleton'

import {userApi} from '@/api'

import '@/plugins/taro-ui'
import './index.scss'

const Index = () => {
  const [loading, setLoading] = useState(true)
  const {userInfo, updateUserInfo} = useSetUserInfo();
  const [resInfo, setResInfo] = useState({})

  // 测试请求
  useReady(async () => {
    const [_, data] = await to(userApi.login('joker', '12321312'))
    if (data) {
      await updateUserInfo(data[0] || {})
      setResInfo(data)
      setLoading(false)
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
    <>
      <Skeleton
        row={2}
        action
        loading={loading}
      >
        <View className='index'>
          <AtMessage />
          <View>响应数据: {JSON.stringify(resInfo)}</View>
          <Text>useName: {userInfo.userName}, age: {userInfo.age}</Text>
          <AtButton className='test-button' type='primary' size='small' onClick={handleAddClick}>更新store</AtButton>
        </View>
      </Skeleton>
    </>
  )
}

export default Index
