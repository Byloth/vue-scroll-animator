const DYNAMIC_LEVEL = process.env.NODE_ENV === "production" ? "error" : "warn";

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parserOptions: { ecmaVersion: 2020 },
  rules: {
    "arrow-parens": ["error", "always"],
    "brace-style": ["error", "allman", { allowSingleLine: true }],
    "comma-dangle": DYNAMIC_LEVEL,
    "indent": ["error", 4, { SwitchCase: 1 }],
    "lines-between-class-members": "off",
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],
    "no-console": DYNAMIC_LEVEL,
    "no-debugger": DYNAMIC_LEVEL,
    "no-multi-spaces": ["error", { exceptions: { "Property": false } }],
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "no-trailing-spaces": "error",
    "no-unused-vars": [DYNAMIC_LEVEL, { args: "none" }],
    "object-shorthand": ["error", "consistent"],
    "quote-props": ["error", "consistent"],
    "quotes": ["error", "double", { allowTemplateLiterals: true, avoidEscape: true }],
    "semi": ["error", "always"],
    "space-before-function-paren": ["error", { anonymous: "never", named: "never", asyncArrow: "always" }],

    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": [DYNAMIC_LEVEL, { args: "none" }],
    "@typescript-eslint/semi": ["error"]
  },
  overrides: [
    {
      files: [".eslintrc.js", "*.config.js"],
      rules: {
        "indent": ["error", 2, { SwitchCase: 1 }],

        "@typescript-eslint/no-var-requires": "off"
      }
    },
    {
      files: ["*.json"],
      rules: {
        "indent": ["error", 2],
        "semi": ["error", "never"],
        "@typescript-eslint/semi": ["error", "never"]
      }
    },
    {
      files: ["*.ts"],
      rules: {
        "no-unused-vars": "off",
        "semi": "off"
      }
    }
  ],
  ignorePatterns: [
    "build/*",
    "dist/*",
    "types/*"
  ]
};
