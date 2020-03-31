/* eslint-disable */
const withLess = require('@zeit/next-less');
const withCss = require('@zeit/next-css');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  ...withCss(
    withLess({
      env: {
        BACKEND_URL: isProduction ? '/antd-form' : '',
      },
      lessLoaderOptions: {
        javascriptEnabled: true,
        // modifyVars: themeVariables, // make your antd custom effective
      },
      assetPrefix: isProduction ? '/antd-form' : '',
      webpack: (config, { isServer }) => {
        if (isServer) {
          const antStyles = /antd\/.*?\/style.*?/;
          const origExternals = [...config.externals];
          config.externals = [
            (context, request, callback) => {
              if (request.match(antStyles)) return callback();
              if (typeof origExternals[0] === 'function') {
                origExternals[0](context, request, callback);
              } else {
                callback();
              }
            },
            ...(typeof origExternals[0] === 'function' ? [] : origExternals),
          ];

          config.module.rules.unshift({
            test: antStyles,
            use: 'null-loader',
          });
        }
        return config;
      },
    })
  ),
};
