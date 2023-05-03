module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            assets: "./src/assets/",
            components: "./src/components",
            utils: "./src/utils",
            hooks: "./src/hooks",
          },
        },
      ],
      require.resolve("expo-router/babel"),
      "react-native-reanimated/plugin",
    ],
  };
};
