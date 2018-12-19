/*
* @Author: Administrator
* @Date:   2018-09-14 14:17:29
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-14 15:33:45
*/
import React from 'react';
// 确保默认值按类型传递
// createContext() 匹配的属性是 Consumers 所期望的
export const ThemeContext = React.createContext({
  langs:'en-US',
  initDone:false,
  langHanlde: () => {}
});