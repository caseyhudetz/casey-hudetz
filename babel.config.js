module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        root: ['./'],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@services': './src/services',
          '@utils': './src/utils',
          '@types': './src/types',
          '@data': './src/data',
          '@hooks': './src/hooks',
          '@stores': './src/stores',
        },
      }],
    ],
  };
};
