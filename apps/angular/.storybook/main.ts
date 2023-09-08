const { mergeConfig } = require('vite');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "staticDirs": [
  ],
  features: {
    postcss: true,
    storyStoreV7: true,
  },
  async viteFinal(config: any, {  }) {
    // return the customized config
    return mergeConfig(config, {
      //plugins: [angular.default()],
    });
  },  
}