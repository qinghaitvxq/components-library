import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel, { getBabelOutputPlugin } from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

// import scss from "rollup-plugin-scss";
import postcss from "rollup-plugin-postcss";
import jsx from "acorn-jsx";

export default {
  input: "src/main.js",
  acornInjectPlugins: [jsx()],
  plugins: [
    peerDepsExternal(),
    postcss({
      extract: false,
      modules: true,
      use: ["sass"],
    }),
    babel({
      presets: ["@babel/preset-react"],
      babelHelpers: "bundled",
      extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".ts", ".tsx"],
      exclude: "node_modules/**",
    }),
    nodeResolve(),
    commonjs(),
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
  external: ["react", "react-dom"],
};
