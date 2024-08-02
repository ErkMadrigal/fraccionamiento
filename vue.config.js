const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  chainWebpack: config => {
      config.module
          .rule('svg')
          .exclude.add(/node_modules/)
          .end();

      config.module
          .rule('svg')
          .test(/\.svg$/)
          .use('svg-sprite-loader')
          .loader('svg-sprite-loader')
          .options({ symbolId: 'icon-[name]' });
  }
};  