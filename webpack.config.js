const { getDefaultConfig } = require("metro-config");
const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues();
exports.resolver = {
  // ...defaultResolver, // --> Working when this line is commented
  sourceExts: [
    ...defaultResolver.sourceExts,
    "cjs",
  ],
};

const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync(
        {
            ...env,
            babel: { dangerouslyAddModulePathsToTranspile: ['@gorhom'] },
        },
        argv
    );

    return config;
};