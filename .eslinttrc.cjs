module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react/prop-types': 'off',
    'import/order': 'off', // 关闭 ESLint 的排序规则避免冲突
  },
  settings: {
    react: { version: 'detect' },
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  ignorePatterns: ['node_modules/', 'dist/', 'build/'],
};
