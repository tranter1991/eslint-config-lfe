module.exports = {
  plugins: ['react'],
  rules: {
    // 文件名必须为jsx..
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': 0,

    // 大家懒得写propTypes
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': 0,

    // 有propType 必须有defaultProps
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    'react/require-default-props': 0,

    // 循环component时key不能是index,在没有id的情况下没有想到更好的方法..
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    'react/no-array-index-key': 0,

    // 如果只有render,建议用纯函数, 习惯不好养啊..
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': 0,

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
    'react/forbid-prop-types': [2, { forbid: ['any'] }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    // 优先使用解析构
    'react/prefer-destructuring': 0,
  },
};
