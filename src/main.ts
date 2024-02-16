// imports the main.scss for rollup-plugin-postcss to generate dist/main.css
import "../styles/main.scss";

// example import from src/sum.js - delete before you start
import { sum } from "./sum";

interface Lib {
  add: (a: number, b: number) => number;
}

export default function Lib(): Lib {
  return { add: sum };
}