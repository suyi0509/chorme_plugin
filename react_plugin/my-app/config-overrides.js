/*
 * @Author: suyi
 * @Date: 2022-09-22 15:08:56
 * @LastEditTime: 2022-09-22 15:08:57
 * @LastEditors: suyi
 * @Description: 如果代码不是为了制造bug，那将毫无意义
 * @FilePath: \react_plugin\my-app\config-overrides.js
 */
const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addWebpackAlias,
} = require('customize-cra');
const path = require('path');

module.exports = override(
  // 添加装饰器
  addDecoratorsLegacy(),

  disableEsLint(),

  // 设置路径别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  })
);
