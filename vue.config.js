const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    const rule = config.module.rule('svg');
    rule.uses.clear();

    rule.oneOf('svg-loader')
      .include.add(path.resolve(__dirname, 'src/assets/icons'))
      .end()
    .use('vue-svg-loader')
      .loader('vue-loader')
      .loader('vue-svg-loader')
      .end()
    .end()
    .oneOf('normal')
    .use('file-loader')
      .loader('file-loader');
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/main.scss";
        `
      }
    }
  },
};


