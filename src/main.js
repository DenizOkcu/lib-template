// imports the main.scss for rollup-plugin-postcss to generate dist/main.css
import '../styles/main.scss';
// example import from src/sum.js - delete before you start
import sum from './sum';

export default function Lib() {
  return { add: sum };
}
