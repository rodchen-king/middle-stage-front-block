export default {
  plugins: [
    [
      'umi-plugin-block-dev',
      {
        layout: 'rodchen-king-user',
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
