/*
 * @Description:
 * @Author: xieyadong
 * @Date: 2024-01-17 09:54:40
 * @LastEditTime: 2024-01-18 15:18:28
 * @LastEditors: xieyadong
 */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {}
}
