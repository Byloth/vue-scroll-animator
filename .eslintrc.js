const DYNAMIC_LEVEL = process.env.NODE_ENV === "production" ? "error" : "warn";

module.exports = {
  root: true,
  env: { node: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "arrow-parens": ["error", "always"],
    "brace-style": ["error", "allman", { allowSingleLine: true }],
    "comma-dangle": DYNAMIC_LEVEL,
    "indent": ["error", 4],
    "lines-between-class-members": "off",
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],
    "no-console": DYNAMIC_LEVEL,
    "no-debugger": DYNAMIC_LEVEL,
    "no-unused-vars": [DYNAMIC_LEVEL, { args: "none" }],
    "quote-props": ["error", "consistent"],
    "quotes": ["error", "double", { allowTemplateLiterals: true, avoidEscape: true }],
    "space-before-function-paren": ["error", { anonymous: "never", named: "never", asyncArrow: "always" }],

    "@typescript-eslint/no-extra-semi": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": [DYNAMIC_LEVEL, { args: "none" }],
    "@typescript-eslint/semi": ["error"]
  },
  overrides: [
    {
      files: ["*.js"],
      rules: { "semi": ["error", "always"] }
    },
    {
      files: [".eslintrc.js", "*.config.js"],
      rules: {
        "indent": ["error", 2],

        "@typescript-eslint/no-var-requires": "off"
      }
    }
  ]
};
