// ref: https://umijs.org/config/
export default {
  mountElementId: 'app',
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: false,
        dva: {
          immer: true
        },
        dynamicImport: true,
        title: '早学',
        dll: false,
        routes: {
          exclude: []
        },
        hardSource: false
      }
    ]
  ]
};
