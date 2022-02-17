import axios from "axios-miniprogram";
import {
  atMessage,
  getStorageSync,
  hideNavigationBarLoading,
  showNavigationBarLoading
} from '@tarojs/taro';
import {debounce} from "@/utils";

// loading 对象
let loading: any = null;
// 当前正在请求的数量
let needLoadingRequestCount = 0;

// 显示loading
const showLoading = () => {
  if (needLoadingRequestCount === 0 && !loading) loading = showNavigationBarLoading();
  needLoadingRequestCount++;
}

// 隐藏loading
const hideLoading = () => {
  needLoadingRequestCount--;
  needLoadingRequestCount = Math.max(needLoadingRequestCount, 0);
  if (needLoadingRequestCount === 0) toHideLoading();
}

// 防止多次请求loading闪烁
const toHideLoading = debounce(() => {
  loading && hideNavigationBarLoading();
  loading = null;
}, 300)


const request = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 30000,
  headers: {
    "content-type": "application/json",
    "showLoading": true
  }
});

request.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      token: getStorageSync("token"),
    };
    // 控制showLoading是否显示
    if (config.headers.showLoading) showLoading()

    return config;
  },
  (error) => {
    hideLoading()

    atMessage({
      message: '请求失败',
      type: 'error'
    })
    return Promise.reject(error);
  }
);

/**
 * 响应拦截
 */
request.interceptors.response.use(
  (response: any) => {
    if (response.status !== 200) {
      console.log('error...')
    }

    hideLoading()
    return response.data;
  },
  (err) => {
    hideLoading()
    atMessage({
      message: '请求失败',
      type: 'error'
    })

    return Promise.reject(err)
  }
);

export default request;
