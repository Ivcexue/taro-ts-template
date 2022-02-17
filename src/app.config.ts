export default {
  pages: [
    'pages/index/index',
    'pages/test/index'
  ],
  tabBar: {
    color: '#000',
    borderStyle: 'white',
    selectedColor: '#6190E8',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/test/index',
        text: '测试'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'OA-小助手',
    navigationBarTextStyle: 'black',
    backgroundColor: "#eef3f3"
  }
  // 按需引入
  // lazyCodeLoading: "requiredComponents"
}
