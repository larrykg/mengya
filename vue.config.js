module.exports = {
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== "production" ? true : false
      }
    }
  },
  //关闭ESlint
  lintOnSave: false,
  //代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://119.29.163.64:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        },

      }
    }
  }
};
