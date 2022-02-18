import {useState} from 'react'
import {hideNavigationBarLoading, showNavigationBarLoading} from "@tarojs/taro";
import {debounce} from "@/utils";

/**
 * loading hook
 */
const useShowLoading = () => {
  // loading对象
  const [loading, setLoading] = useState<any>(null)
  // 当前正在请求的数量
  let [requestCount, setRequestCount] = useState(0)

  // 显示loading
  const showLoading = () => {
    if (requestCount === 0 && !loading) setLoading(showNavigationBarLoading());
    setRequestCount(requestCount++)
  }

  // 隐藏loading
  const hideLoading = () => {
    setRequestCount(requestCount--)
    setRequestCount(Math.max(requestCount, 0))
    if (requestCount === 0) toHideLoading();
  }

  // 防止多次请求loading闪烁
  const toHideLoading = debounce(() => {
    loading && hideNavigationBarLoading();
    setLoading(null)
  }, 300)


  return {
    showLoading,
    hideLoading
  }

}

export default useShowLoading
