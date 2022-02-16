import axios from "axios-miniprogram";
import Taro from '@tarojs/taro';

const request = axios;

const baseURL = process.env.BASE_URL;
request.defaults.baseURL = baseURL;
request.defaults.headers = {
  "content-type": "application/json",
};

request.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      token: Taro.getStorageSync("token"),
    };

    return config;
  },
  (error) => {
    // if (error.status !== 200) console.log("error...");
    return Promise.reject(error);
  }
);

/**
 * 响应拦截
 */
request.interceptors.response.use(
  (response: any) => {
    console.log(response, "response...");

    return response;
  },
  (err) => Promise.reject(err)
);

export default request;
