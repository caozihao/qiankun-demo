/*
 * @Author: caozihao
 * @Date: 2021-07-21 17:33:31
 * @LastEditors: caozihao
 * @LastEditTime: 2021-08-11 10:29:53
 */
import { useModel } from 'umi';
import styles from './index.less';

export default function IndexPage() {
  const masterProps = useModel('@@qiankunStateFromMaster');

  return (
    <div>
      <h1 className={styles.title}>app1</h1>
    </div>
  );
}
