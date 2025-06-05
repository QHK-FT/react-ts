# 项目模板构建说明

:office: 工作环境：vscode

:hammer: 项目依赖：pnpm + vite + react + typescript

项目结构：

```
src/
├── assets/              # 静态资源
├── components/          # 通用组件
│   └── ui/              # 基础UI组件 (Button, Input等)
├── features/            # 功能模块 (按业务领域划分)
├── hooks/               # 自定义hooks
├── layouts/             # 页面布局
├── pages/               # 页面组件
├── routes/              # 路由配置
├── services/            # API服务
├── stores/              # 状态管理
├── styles/              # 全局样式
├── types/               # 全局类型定义
├── utils/               # 工具函数
├── App.tsx
├── main.tsx
└── vite-env.d.ts
```

## Part 1. 项目初始化配置

### 1. package.json

`ctrl + ~` 唤出项目根目录终端 -> 执行`pnpm init`生成配置文件 package.json

### 2. license

在 [choosealicense](https://choosealicense.com/) 中选择合适的`license`

### 3. .gitignore

使用 vscode 的 [.gitignore](https://marketplace.visualstudio.com/items?itemName=codezombiech.gitignore) 插件，通过`ctrl+shift+p` 召唤命令面板，输入 `Add gitignore` 命令，选择对应的系统或编辑器名，自动添加需要忽略的文件或文件夹至 `.gitignore` 中

默认选择：Windows、MacOS、Node、VisualStudioCode、SublimeText，除此之外还需要加入忽略的补充需手动添加

### 4. README.md

## Part 2. 代码规范化

```cmd
pnpm add -D eslint eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-prettier prettier
```

### 1. Prettier

项目根目录新建配置文件 `.prettierrc`

配置选项参考文档 [docs](https://prettier.io/docs/options)

```cmd
pnpm add -D @trivago/prettier-plugin-sort-imports
```

结合 `@trivago/prettier-plugin-sort-imports` 插件实现排序和格式化 import 语句

```json
{
  "plugins": ["@trivago/prettier-plugin-sort-imports"],
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "printWidth": 100,
  "trailingComma": "all",
  "bracketSpacing": true,
  "jsxSingleQuote": true,
  "arrowParens": "always",
  "importOrder": ["^react$", "^@?\\w", "^[./]"],
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true,
  "importOrderCaseInsensitive": true,
  "importOrderParserPlugins": ["typescript", "jsx"]
}
```

- tabWidth：缩进宽度

- useTabs：是否使用制表符

- semi：是否默认添加分号

- singleQuote：是否默认单引号

- printWidth：单行最长字符，超过换行

- trailingComma：控制尾随逗号 - all / es5 / none

- bracketSpacing：控制括号空格

- jsxSingleQuote：控制 JSX 中的单引号

- arrowParens：控制箭头函数的参数是否带括号 - always / avoid

- importOrder：控制导入顺序

  - 优先策略：内置模块 → 第三方库 → 别名路径 → 父目录 → 当前目录 → 样式文件 → 其他

    ```json
    {
      "importOrder": [
        // 1. 内置 Node 模块（如 fs, path）
        "^node:",
        "<BUILTIN_MODULES>",
  
        // 2. 第三方库（按字母排序）
        "^react",
        "^next",
        "^@?\\w",
  
        // 3. 绝对路径别名（需配合 tsconfig.json 配置）
        "^@/(.*)$",
        "^@core/(.*)$",
        "^@components/(.*)$",
        "^@utils/(.*)$",
  
        // 4. 父目录引用
        "^\\.\\./",
  
        // 5. 当前目录引用
        "^\\./",
  
        // 6. 样式文件（CSS/SCSS）
        "\\.(css|scss|less)$"
  
        // 7. 其他
        "^[./]"
      ],
    }
    ```

- importOrderSeparation：在每个分组之间添加空行

- importOrderSortSpecifiers：对每个导入中的说明符进行排序

- importOrderCaseInsensitive：忽略导入模块的大小写

- importOrderParserPlugins：指定解析器插件

### 2. ESlint

关于 typescript 相关配置的参考文档 [typescript-eslint](https://typescript-eslint.io/getting-started/)

```javascript
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
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react/prop-types': 'off',
  },
  settings: {
    react: { version: 'detect' },
  },
};
```

### 3. Git Hooks（Husky）

```cmd
pnpm add -D husky lint-staged
```

初始化 husky

```cmd
pnpm exec husky init
```

## 3. Part 3. Vite 配置

```cmd
pnpm add -D vite @vitejs/plugin-react-swc
```

## 4. Part 4. 框架配置

```cmd
pnpm add react react-dom
pnpm add -D @types/react @types/react-dom @types/node
```
