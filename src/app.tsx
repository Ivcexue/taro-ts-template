import {Component} from 'react'
import './app.scss'

class App extends Component {
  onPageNotFound() {
    console.log('on page not found...')
  }

  componentDidMount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentDidCatchError() {
  }

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}

export default App
