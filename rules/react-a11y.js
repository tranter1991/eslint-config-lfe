module.exports = {
  plugins: ['jsx-a11y', 'react'],
  rules: {
    // 有onClick的情况下, 必须有onKeyUp, onKeyDown, onKeyPress其中一个
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
    'jsx-a11y/click-events-have-key-events': 0,

    // 校验超链接标签href, Link标签校验to
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
    'jsx-a11y/anchor-is-valid': 0,

    // 建议使用语义化标签..
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
    'jsx-a11y/no-static-element-interactions': 0,

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md
    // 非交互元素不支持事件处理 关闭
    'jsx-a11y/no-noninteractive-element-interactions': 0,
  },
};
