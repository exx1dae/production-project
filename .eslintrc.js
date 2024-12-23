module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:i18next/recommended",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "i18next", "react-hooks"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "import/no-extraneous-dependencies": "off",
    "i18next/no-literal-string": [
      "error",
      {
        markupOnly: true,
        ignoreAttribute: ["data-testid", "to"],
      },
    ],
    "import/order": "off",
    "max-len": ["error", { ignoreComments: true, code: 100 }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react/no-unused-prop-types": "warn",
    "no-param-reassign": "off",
  },
  globals: {
    DEV: true,
  },
  overrides: [
    {
      files: ["**/src/**/*.test.{ts, tsx}"],
      rules: {
        "i18next/no-literal-string": "off",
      },
    },
  ],
};
