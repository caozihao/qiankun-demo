/*
 * @Author: caozihao
 * @Date: 2021-07-21 17:16:26
 * @LastEditors: caozihao
 * @LastEditTime: 2021-08-10 16:45:11
 */
import { defineConfig } from 'umi';
import pageRoutes from './router.config';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: pageRoutes,
  fastRefresh: {},

  // 微服务配置  需要安装@umijs/plugin-qiankun
  qiankun: {
    slave: {},
  },
});
