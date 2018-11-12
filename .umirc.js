export default {
  mountElementId: 'app',
  base: '/one-article-react/',
  publicPath: '/one-article-react/',
  history: 'hash',
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: false,
        dva: {
          immer: true
        },
        dynamicImport: false,
        title: '早学',
        dll: false,
        routes: {
          exclude: []
        },
        hardSource: false,
        fastClick: true
      }
    ]
  ]
};
