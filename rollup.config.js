import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel, { getBabelOutputPlugin } from "@rollup/plugin-babel";
import jsx from "acorn-jsx";

export default {
  input: "src/main.js",
  acornInjectPlugins: [jsx()],
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({
      presets: ["@babel/preset-react"],
      babelHelpers: "bundled",
      extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".ts", ".tsx"],
    }),
  ],
  output: {
    file: "build/bundle.js",
    format: "esm",
    plugins: [
      getBabelOutputPlugin({
        presets: ["@babel/preset-env"],
      }),
    ],
  },
};
