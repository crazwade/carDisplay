module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  rules: {
    // 句尾缺少 ;
    semi: 'error',
    // 處理 defineEmits "is defined but never used" 問題
    'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: true }],
  },
};