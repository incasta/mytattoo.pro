const path = require('path');

module.exports = {
    css: {
      loaderOptions: {
        sass: {
          data: `
            @import "@/scss/main.scss";
          `
        }
      }
    },

    configureWebpack: (config) => {
      const rule = config.module.rules.find(({ test }) => test.test('.svg'));
      rule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        oneOf: [
          {
            include: path.resolve(__dirname, 'assets/images/icons'),
            use: [
              'vue-loader',
              'vue-svg-loader',
            ],
          },
          {
            use: 'file-loader',
          },
        ],
      });
    },
  };


