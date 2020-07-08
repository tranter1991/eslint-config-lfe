module.exports = {
  extends: [
    'eslint-config-airbnb/base',
    './rules/base.js',
    './rules/vue.js'
  ].map(require.resolve)
};
