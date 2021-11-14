/**
 * @typedef { import("@vue/cli-service").ProjectOptions } Options
 */
const ScriptSetupPlugin = require('unplugin-vue2-script-setup/webpack');

/** @type {Options} */
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      ScriptSetupPlugin({
        /* options */
      }),
    ],
  },
  chainWebpack(config) {
    // config.plugins.set('ScriptSetupPlugin', ScriptSetupPlugin({}));
    // console.log(config.toConfig().module.rules[1]);
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        options.compiler = require('vue-template-babel-compiler');
        return options;
      });
    config.plugins.delete('fork-ts-checker'); // using vue-tsc for type checking
  },
};
