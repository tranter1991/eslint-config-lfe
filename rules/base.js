module.exports = {
  rules: {
    // 如果class中的方法没有调用this.xx得改成static方法, 习惯不好养啊..
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': 0,

    // 使用语义化标签.
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
    'no-static-element-interactions': 0,

    // 有onClick的情况下, 必须有onKeyUp, onKeyDown, onKeyPress其中一个
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
    'click-events-have-key-events': 0,

    // import中的扩展名, 忽略ts的.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': 0,

    // import中本地文件是否存在,.ts文件目前解决不了这个,先关掉,解决了在打开
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-unresolved': 0,

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    // 关闭强制import顺序
    'import/order': 0,

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    // es6中使用require 警告
    'import/no-dynamic-require': 1,

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    // '当模块中只有一个导出时，使用默认导出而不是命名导出'
    'import/prefer-default-export': 0,

    // 建议解构使用, 打开array
    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': 0,

    // 表达式必须加括号, 关掉了
    // https://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': [
      'error',
      {
        allowSamePrecedence: true,
      },
    ],

    // yoda 条件,前面是常量后面是变量
    // https://eslint.org/docs/rules/yoda
    yoda: 0,

    // 校验typeof xxx
    // https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': 0,

    // 有些语法不建议用, 参考文档:
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': 1,

    // 不允许操作参数, 如果是对象的话,可以操作
    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': [
      0,
      {
        props: false,
      },
    ],

    // 如果fun根据条件显示的返回一个类型的值,就不能返回另外一个类型的值
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 0,

    // 不区分换行符
    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': 0,

    // https://eslint.org/docs/rules/comma-dangle
    // 控制对象或数组最后一个元素后是否需要逗号, airbnb 默认是必须, 这里设置成 0, 关闭; 可有可无
    'comma-dangle': 0,

    // https://eslint.org/docs/rules/eol-last
    // 控制文件最后是否要空一行; 默认是必须, 这里设置成 0, 关闭; 可有可无
    'eol-last': 0,

    // https://eslint.org/docs/rules/func-style
    // 设置不让用函数声明的方式来定义函数;
    'func-style': 0,

    // https://eslint.org/docs/rules/arrow-parens
    // 控制箭头函数参数的小括号: "always" （默认）在所有情况下都需要小括号; "as-needed" 当只有一个参数时允许省略小括号
    'arrow-parens': ['error', 'always'],

    // https://eslint.org/docs/rules/global-require#enforce-require-on-the-top-level-module-scope-global-require
    // require函数必须写在头部, 这里做警告, 有动态require的需求
    'global-require': 1,
  },
};
