import { defineConfig } from "vite";
import { resolve } from "path";
import postcss from "rollup-plugin-postcss";

export default defineConfig({
  //   root: "src",
  //   assetsInclude: ["**/*.css"],
  plugins: [
    // legacy({
    //   targets: ['defaults', 'not IE 11']
    // }),
    // postcss({
    //   extract: true,
    //   // Or with custom file name
    //   //   extract: resolve("dist/colors.css"),
    //   plugins: [],
    // }),
  ],
  build: {
    // lib: {
    //   entry: resolve(__dirname, "src/main.js"),
    //   name: "Nuds",
    //   fileName: "nuds",
    //   //   entry: resolve(__dirname, "src/styles/colors.css"),
    //   //   name: "Colors",
    //   //   // the proper extensions will be added
    //   //   fileName: "colors.css",
    // },
    // rollupOptions: {
    //   input: {
    //     // apptest: "src/main.js",
    //     colors: "src/styles/colors.css",
    //   },
    //   output: {
    //     entryFileNames: "[name].css",
    //     // dir: "./myoutput",
    //   },
    // },
    // rollupOptions: {
    //   // make sure to externalize deps that shouldn't be bundled
    //   // into your library
    //   external: ['vue'],
    //   output: {
    //     // Provide global variables to use in the UMD build
    //     // for externalized deps
    //     globals: {
    //       vue: 'Vue'
    //     }
    //   }
    // }
  },
});

// import { uglify } from 'rollup-plugin-uglify'
// import babel from 'rollup-plugin-babel'
// import resolve from 'rollup-plugin-node-resolve';
// import postcss from "rollup-plugin-postcss";
// const rollupOptions = [
//   {
//     input: "src/styles/colors.css",
//     output: {
//       file: "dist/colors.css",
//       format: "es",
//     },
//     plugins: [
//       postcss({
//         modules: true,
//         extract: true,
//       }),
//     ],
//   },
// ];
