const { getDefaultConfig } = require("expo/metro-config");
const { withTamagui } = require("@tamagui/metro-plugin");
/** @type {import('expo/metro-config').MetroConfig} */

// Storybook config
const path = require("path");
const { generate } = require("@storybook/react-native/scripts/generate");
generate({
  configPath: path.resolve(__dirname, "./.storybook"),
});

// Tamagui Config
const config = getDefaultConfig(__dirname, {
  isCSSEnabled: true,
});

// Storybook config
config.transformer.unstable_allowRequireContext = true;
config.resolver.sourceExts.push("mjs");

// Export the config with tamagui
module.exports = withTamagui(config, {
  components: ["tamagui"],
  config: "./tamagui.config.ts",
  outputCSS: "./tamagui-web.css",
});