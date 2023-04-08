export const module = {
    rules: [
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
    ],
};

const babelWebpackConfig = require('@nrwl/react/plugins/babel');

module.exports = config => {
  config.module.rules.push(
    {
      test: /\.svg$/,
      use: [
        '@svgr/webpack',
        'url-loader'
      ]
    }
  );
  return babelWebpackConfig(config);
};