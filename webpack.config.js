const { getDefaultConfig } = require("metro-config");
const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues();
exports.resolver = {
  // ...defaultResolver, // --> Working when this line is commented
  sourceExts: [
    ...defaultResolver.sourceExts,
    "cjs",
  ],
};