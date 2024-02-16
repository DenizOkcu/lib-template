import babel from "@rollup/plugin-babel";
import browsersync from "rollup-plugin-browsersync";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/main.js",
    output: {
      name: "Lib",
      file: "dist/main.js",
      format: "iife",
      sourcemap: true,
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-env"],
      }),
      postcss({
        extract: true,
        minimize: true,
      }),
      terser(),
      browsersync(),
    ],
  },
];
