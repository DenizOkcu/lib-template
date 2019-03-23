import browsersync from 'rollup-plugin-browsersync';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import { uglify } from 'rollup-plugin-uglify';

export default [
  {
    input: 'src/main.js',
    output: {
      name: 'Lib',
      file: 'dist/main.js',
      format: 'iife',
      sourcemap: true,
    },
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      postcss({
        extract: true,
        minimize: true,
      }),
      uglify(),
      browsersync({ server: '.' }),
    ],
  },
];
