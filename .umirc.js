export default {
  plugins: [
    [
      'umi-plugin-block-dev',
      {
        layout: 'rodchen-king',
        menu: {
          name: '主页',
          icon: 'home',
        },
      },
    ],
    [
      'umi-plugin-react',
      {
        dva: true,
        locale: true,
        antd: true,
      },
    ],
  ],
};
