import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.node } },
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-unused-vars": "error",
      "prefer-const": "error",
      semi: "error",
      "require-await": "error",
    },
  },
];
