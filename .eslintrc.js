module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true // setup 语法默认变量不引入不报错
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  // plugins: [
  //   // 用到的插件
  //   '@typescript-eslint',
  //   'prettier'
  // ],
  // globals: {
  //   PublicKeyCredential: true
  // },
  rules: {
    // "no-unused-vars": "off",
    '@typescript-eslint/no-unused-vars': ['off'],
    'vue/script-setup-uses-vars': 'error', // setup 语法糖校验

    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // "prettier/prettier": "error", // prettier标记的地方抛出错误信息
    'prettier/prettier': [
      'warn',
      {
        printWidth: 80,
        singleQuote: true,
        tabWidth: 2,
        useTabs: false,
        endOfLine: 'auto',
        semi: false,
        trailingComma: 'none',
        bracketSpacing: true
      }
    ],
    'spaced-comment': [2, 'always'] // 注释后面必须写两个空格
    // "@typescript-eslint/no-explicit-any": ["off"] // 关闭any校验,"
  }
}
