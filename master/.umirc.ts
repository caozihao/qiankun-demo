/*
 * @Author: caozihao
 * @Date: 2021-07-21 17:16:26
 * @LastEditors: caozihao
 * @LastEditTime: 2021-07-21 18:01:03
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
