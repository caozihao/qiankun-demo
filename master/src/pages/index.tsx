/*
 * @Author: caozihao
 * @Date: 2021-07-21 17:16:26
 * @LastEditors: caozihao
 * @LastEditTime: 2021-07-21 18:15:54
 */
import styles from './index.less';
import { Menu, Button } from 'antd';
import { history } from 'umi';
import { useState } from 'react';

export default function IndexPage() {
  console.log('window.location.pathname->', window.location.pathname);

  const handleClick = (item: any) => {
    console.log('key->', item.key);
    history.push(item.key);
  };
  return (
    <div>
      <Menu
        onClick={handleClick}
        // selectedKey="/master"
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="/">首页</Menu.Item>
        <Menu.Item key="/app1">app1</Menu.Item>
        <Menu.Item key="/app2">app2</Menu.Item>
      </Menu>
    </div>
  );
}
