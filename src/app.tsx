import {useReady, useDidHide, onPageNotFound} from '@tarojs/taro'
import './app.scss'

const App = (props) => {
  onPageNotFound(() => {
  })
  useReady(() => {
  })
  useDidHide(() => {
  })

  return props.children
}

export default App
