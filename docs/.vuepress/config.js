module.exports = {
  base:'/myGulu-demo-1/',
  title: 'Glory UI',
  description: '一个好用UI页面',
  configureWebpack: {
    resolve: {
      alias: {
        '@': '../../../src'
      }
    }
  },
  themeConfig: {
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/tabs',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/popover',
          '/components/slides',
        ]
      },
    ]
  }
}
