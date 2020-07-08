module.exports = {
  extends: ['plugin:vue/base'],
  rules: {
    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/max-attributes-per-line.md
    'vue/max-attributes-per-line': 0,
    'vue/html-self-closing': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/require-default-prop': 2,
    'vue/html-indent': 2,
    'vue/html-end-tags': 2,
  },
};
