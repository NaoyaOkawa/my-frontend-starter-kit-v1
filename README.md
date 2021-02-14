# my-frontend-starter-kit-v1

- Yarn
- Next.js
- TypeScript
- SCSS
- Tailwind
- ESLint
- Stylelint
- VSCode
- Storybook
- Jest

## Yarn

### インストール

```bash
npm install -g yarn
```

### 参考

<https://yarnpkg.com/getting-started/install>

## Next.js

### インストール

```bash
yarn create next-app hogehoge
```

```bash
cd hogehoge
```

```bash
yarn dev
```

ブラウザで`http://localhost:3000`にアクセスして**Welcome to Next.js**が表示されたら完了

### 参考

<https://nextjs.org/docs>

## TypeScript

### インストール

```bash
touch tsconfig.json
```

```bash
yarn add --dev typescript @types/react @types/node
```

```bash
yarn dev
```

`tsconfig.json`と`next-env.d.ts`が変更されたら完了。

```diff json:tsconfig.json
+{
+  "compilerOptions": {
+    "target": "es5",
+    "lib": [
+      "dom",
+      "dom.iterable",
+      "esnext"
+    ],
+    "allowJs": true,
+    "skipLibCheck": true,
+    "strict": false,
+    "forceConsistentCasingInFileNames": true,
+    "noEmit": true,
+    "esModuleInterop": true,
+    "module": "esnext",
+    "moduleResolution": "node",
+    "resolveJsonModule": true,
+    "isolatedModules": true,
+    "jsx": "preserve"
+  },
+  "include": [
+    "next-env.d.ts",
+    "**/*.ts",
+    "**/*.tsx"
+  ],
+  "exclude": [
+    "node_modules"
+  ]
+}
```

```diff tsconfig:next-env.d.ts
/// <reference types="next" />
+/// <reference types="next/types/global" />
```

`.js, .jsx`を`.ts, .tsx`にリネームしていく。

### 参考

<https://nextjs.org/learn/excel/typescript/create-tsconfig>

## SCSS

### インストール

```bash
ruby -v
```

```bash
sudo gem install sass
```

```v
sass -v
```

```v
yarn add sass
```

```v
touch next.config.js
```

:::message
touch next.config.ts はエラー
:::

```bash
Error: Configuring Next.js via 'next.config.ts' is not supported. Please replace the file with 'next.config.js'.
```

`.css`を`.scss`にリネームしていく。

### 参考

<https://uxmilk.jp/38108>

## Tailwind

### インストール

:::message alert
前提: **Next.js v10**
:::

```bash
yarn add tailwindcss postcss postcss-flexbugs-fixes postcss-preset-env autoprefixer
```

```bash
npx tailwindcss init -p
```

`tailwind.config.js`と`postcss.config.js`が作成される。

```diff js:tailwind.config.js
+module.exports = {
+  purge: [],
+  darkMode: false, // or 'media' or 'class'
+  theme: {
+    extend: {},
+  },
+  variants: {
+    extend: {},
+  },
+  plugins: [],
+}
```

```diff js:postcss.config.js
+module.exports = {
+  plugins: {
+    tailwindcss: {},
+    autoprefixer: {},
+  },
+};
```

### 設定

```diff js:tailwind.coinfig.js
module.exports = {
-  purge: [],
+  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

```

```diff js:postcss.config.js
module.exports = {
-  plugins: {
-    tailwindcss: {},
-    autoprefixer: {},
-  },
+  plugins: [
+    "tailwindcss",
+    "autoprefixer",
+    "postcss-flexbugs-fixes",
+    [
+      "postcss-preset-env",
+      {
+        autoprefixer: {
+          flexbox: "no-2009",
+        },
+        stage: 3,
+        features: {
+          "custom-properties": false,
+        },
+      },
+    ],
+  ],
};
```

### 動作確認

一部の記述を Tailwind に変更してみる。

```diff sass:globals.scss
html,body {
+  @apply p-0 m-0;
-  padding: 0;
-  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
```

![](https://storage.googleapis.com/zenn-user-upload/xghxqkja6w155rppcp6s427t8jf4)
_変更前_

![](https://storage.googleapis.com/zenn-user-upload/0i15jagtste74f0vyezcwebxdi6y)
_変更後_

### 参考

<https://tailwindcss.com/docs/guides/nextjs>

<https://nextjs.org/learn/basics/assets-metadata-css/styling-tips>

## Stylelint

### インストール

```bash
yarn add --dev stylelint stylelint-config-standard stylelint-scss stylelint-config-prettier stylelint-config-recess-order
```

### 設定

```bash
touch stylelint.config.js
```

```js:stylelint.config.js
module.exports = {
  plugins: ["stylelint-scss"],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-prettier",
    "stylelint-config-recess-order",
  ],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
    "block-no-empty": false,
  },
};
```

### 参考

<https://dev.to/oliverandrich/vscode-stylelint-tailwind-css-3oag>
