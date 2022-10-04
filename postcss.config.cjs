const cssnano = require("cssnano");
const postcssImport = require("postcss-import");
const postcssMixins = require("postcss-mixins");
const postcssFunctions = require("postcss-functions");
const postcssPresetEnv = require("postcss-preset-env");
// import postcssPurgecss from '@fullhuman/postcss-purgecss';
// import cssTokens from '../../src/styles/tokens';
// const cssMixins = require("./src/styles/mixins");
// const cssFunctions = require("./src/styles/functions");

module.exports = {
  plugins: [
    // postcssImport({ from: "nuds/global.css" }),
    // // postcssMixins({ mixins: cssMixins }),
    // // postcssFunctions({ functions: cssFunctions }),
    postcssPresetEnv({
      stage: 0,
      autoprefixer: true,
      // importFrom: `nuds/tokens.js`,
      // features: {
      //   'environment-variables': {
      //     importFrom: `src/styles/tokens.js`,
      //     // importFrom: { environmentVariables: { ...cssTokens } },
      //   },
      // },
    }),
    // postcssPurgecss({ content: ['dist/**/*.html'] }),
    // autoprefixer, // included into postcssPresetEnv
    //   ...(shouldMinify ? [cssnano()] : []),
  ],
};