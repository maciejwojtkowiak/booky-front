/* eslint-disable @typescript-eslint/no-unsafe-assignment */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "xo",
    "xo-typescript",
    "standard-with-typescript",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
    },
  ],
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "simple-import-sort", "prettier"],
  ignorePatterns: ["tailwind.config.js", "*vite.config.ts"],
  rules: {
    "@typescript-eslint/quotes": "off",
    "object-curly-spacing": "off",
    "react/react-in-jsx-scope": 0,
    "@typescript-eslint/object-curly-spacing": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Packages `react` related packages come first.
          ["^react", "^@?\\w"],
          // Internal packages.
          ["^(@|components)(/.*|$)"],
          // Side effect imports.
          ["^\\u0000"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports.
          ["^.+\\.?(css)$"],
        ],
      },
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
      },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        trailingComma: "all",
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
      },
    ],
    "comma-dangle": 0,
    "@typescript-eslint/no-unnecessary-type-assertion": [
      "error",
      { typesToIgnore: [`AppDispatch`] },
    ],
    "@typescript-eslint/strict-boolean-expressions": 0,
    "@typescript-eslint/no-invalid-void-type": 0,
  },
};
