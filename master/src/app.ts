/*
 * @Author: caozihao
 * @Date: 2021-08-10 18:15:14
 * @LastEditors: caozihao
 * @LastEditTime: 2021-08-10 18:23:18
 */
import { useState } from 'react';

export function useQiankunStateForSlave() {
  const [masterState, setMasterState] = useState({ data: 'father' });

  return {
    masterState,
    setMasterState,
  };
}
