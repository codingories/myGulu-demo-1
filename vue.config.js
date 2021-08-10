const path = require('path')

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
