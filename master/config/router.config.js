/*
 * @Author: caozihao
 * @Date: 2021-08-10 16:10:24
 * @LastEditors: caozihao
 * @LastEditTime: 2021-08-10 17:11:21
 */

export default [
  {
    path: '/',
    component: '@/layouts/index.tsx',
    routes: [
      {
        path: '/',
        component: '@/pages/index.tsx',
      },
      {
        path: '/app1',
        microApp: 'app1',
      },
    ],
  },
];
