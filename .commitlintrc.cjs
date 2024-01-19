/*
 * @Description:
 * @Author: xieyadong
 * @Date: 2024-01-19 09:37:36
 * @LastEditTime: 2024-01-19 09:41:43
 * @LastEditors: xieyadong
 */
module.exports = {
  ignores: [(commit) => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],// 信息以空格开头
    'footer-leading-blank': [2, 'always'], // 信息不能未空
    'header-max-length': [2, 'always', 108], // 信息最大长度
    'subject-empty': [2, 'never'], // 信息类型不能未空
    'type-empty': [2, 'never'], // 提交信息的类型 下文有介绍
    'type-enum': [
      2,
      'always',
      [
        'feat',// 增加一个新特性
        'fix', // 修复一个 bug
        'perf',//更改代码以提高性能
        'style',//不影响代码含义的改动，例如去掉空格、改变缩进、增删分号
        'docs',//仅仅修改文档说明
        'test',//增加新的测试功能或更改原有的测试模块
        'refactor',// 代码重构时使用
        'build',//更改构建系统和外部依赖项
        'ci',
        'chore',
        'revert',
        'wip',
        'workflow',
        'types',
        'release'
      ]
    ]
  }
}
