/*
 * @Author: caozihao
 * @Date: 2021-08-10 15:30:59
 * @LastEditors: caozihao
 * @LastEditTime: 2021-08-10 15:33:30
 */

export const qiankun = {
  // 应用加载之前
  async bootstrap(props: string) {
    console.log('app1 bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props: string) {
    console.log('app1 mount', props);
  },
  // 应用卸载之后触发
  async unmount(props: string) {
    console.log('app1 unmount', props);
  },
};
