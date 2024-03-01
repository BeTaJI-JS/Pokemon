module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  // plugins: ["react-refresh"],
  plugins: ["sort-keys", "sort-destructure-keys", "import", "react-refresh"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "sort-keys/sort-keys-fix": 1,
    "sort-destructure-keys/sort-destructure-keys": 2,
    "react/function-component-definition": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-props-no-spreading": 0,
    "react/require-default-props": 0,
    "react/jsx-no-useless-fragment": 0,
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
    "react/prop-types": 0,
    "react/jsx-fragments": 0,
    "react/button-has-type": 0,
    "react/jsx-sort-props": [
      2,
      {
        callbacksLast: true,
        shorthandFirst: true,
      },
    ],
    "react-refresh/only-export-components": "warn",
    "jsx-a11y/control-has-associated-label": 0,
    "import/no-unresolved": 0,
    "import/order": [
      1,
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc",
        },
        pathGroupsExcludedImportTypes: ["react"],
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
        pathGroups: [
          {
            group: "external",
            pattern: "react",
            position: "before",
          },
          {
            group: "internal",
            pattern: "api/**",
            position: "after",
          },
          {
            group: "internal",
            pattern: "assets/**",
            position: "after",
          },
          {
            group: "internal",
            pattern: "components/**",
            position: "after",
          },
          {
            group: "internal",
            pattern: "consts/**",
            position: "after",
          },
          {
            group: "internal",
            pattern: "contexts/**",
            position: "after",
          },
          {
            group: "internal",
            pattern: "helpers/**",
            position: "after",
          },
          {
            group: "internal",
            pattern: "hooks/**",
            position: "after",
          },
          {
            group: "internal",
            pattern: "pages/**",
            position: "after",
          },
          {
            group: "internal",
            pattern: "routes/**",
            position: "after",
          },
          {
            group: "internal",
            pattern: "layouts/**",
            position: "after",
          },
          {
            group: "internal",
            pattern: "store",
            position: "after",
          },
          {
            group: "internal",
            pattern: "store/**",
            position: "after",
          },
          {
            group: "internal",
            pattern: "styles/**",
            position: "after",
          },
          {
            group: "internal",
            pattern: "utils/**",
            position: "after",
          },
          {
            group: "internal",
            pattern: "ui/**",
            position: "after",
          },
        ],
      },
    ],
  },
};
