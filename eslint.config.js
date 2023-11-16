import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    rules: {
      "array-callback-return": "error",
      "no-await-in-loop": "error",
      "no-duplicate-imports": "error",
      "no-unmodified-loop-condition": "error",
      "no-unreachable-loop": "error",
      "no-use-before-define": "error",
      "require-atomic-updates": "error",
      "camelcase": "error",
      "dot-notation": "error",
      "eqeqeq": "error",
      "max-nested-callbacks": ["error", 3],
      "no-console": "warn",
      "no-plusplus": "error",
      "no-shadow": "error",
      "no-var": "error",
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "prefer-destructuring": "error",
      "sort-imports": "warn",
    }
  }
];
