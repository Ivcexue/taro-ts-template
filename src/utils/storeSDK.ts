import Taro from "@tarojs/taro";

/**
 * 存储用户信息
 * @param key
 * @param data
 */
export const setStore = async (key: string, data: any) => {
  return await Taro.setStorage({key, data})
}

/**
 * 删除用户信息
 * @param key
 */
export const removeStore = async (key: string) => {
  return await Taro.removeStorage({key})
}
