import js from "@eslint/js";
import next from "eslint-config-next";
import prettier from "eslint-config-prettier";

export default [
  {
    ignores: ["node_modules", "dist", ".next", "out"]
  },
  js.configs.recommended,
  ...next(),
  prettier
];
