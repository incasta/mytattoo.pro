const path = require('path');

module.exports = {
  configureWebpack: {
    module: {
      rules: [{
        test: /\.svg$/,
        oneOf: [
          {
            include: path.resolve(__dirname, '@/assets/icons'),
            use: [
              'vue-loader',
              'vue-svg-loader',
            ],
          },
          {
            use: 'file-loader',
          },
        ],
      }],
    }
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


