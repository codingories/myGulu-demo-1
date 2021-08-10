const path = require('path')
console.log('3333')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 这里的选项会传递给 css-loader
        sassOptions: {
          includePaths: [path.join(__dirname, 'styles')]
        },
      },
    }
  },
}
