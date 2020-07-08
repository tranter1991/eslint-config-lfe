# eslint-config-lfe

## 特性

- 规则基于 airbnb(es6)
- 支持 react, react-a11y, react-hooks
- 支持 vue
- 支持 typescript

## 规则

- 已覆盖的规范请查看[rules 文件夹](rules)

## 使用

1. 安装

```javascript
npm install eslint eslint-babel eslint-config-lfe
```

2. 在项目根目录创建 `.eslintrc` 配置文件

```javascript
// 默认是 es6+ 和 react
{
  "extends": "@ucarinc/eslint-config-ufe"
}

// 只使用 es6+
{
  "extends": "@ucarinc/eslint-config-ufe/base"
}
```

### 配合 Prettier 使用

1. Install

```
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

2. 修改配置

```
// .eslintrc.js
module.exports = {
  extends: ['lfe', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': 'error',
     // other rules...
 }
};

// .prettierrc.js
module.exports = {
  //
};
```

### VSCode 中使用

1. 安装插件

- Prettier
- ESLint

2. 增加配置

```
// .vscode/.settings.json
{
  "editor.formatOnSave": true,
  "eslint.autoFixOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[html]": {
  	"editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.singleQuote": true, // 防止配置没有生效
  "eslint.validate": [
    "javascript",
   "javascriptreact",
   "typescript",
   "typescriptreact",
  ],
}
```

注意: 修改后最好 reload 一下 vscode, 防止某些配置不生效

## 规则维护

规范调整前, 请先在群中周知, 没问题后再进行调整代码

增加配置时请增加说明和规范的地址, 例如:

```js
// 文件名必须为jsx  -> 这里是说明
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md -> 这里写规则说明地址
'react/jsx-filename-extension': 0,
```
