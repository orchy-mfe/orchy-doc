const findSvgoPlugin = rule => rule.test.toString().includes('svg')

module.exports = function () {
  return {
    name: 'customize-svgo-configuration',
    configureWebpack(configuration) {
      const svgoPlugin = configuration.module.rules.find(findSvgoPlugin)
      const svgoConfig = svgoPlugin.oneOf[0].use[0]
      svgoConfig.options.svgoConfig.plugins.push('prefixIds')
      return configuration
    },
  };
};