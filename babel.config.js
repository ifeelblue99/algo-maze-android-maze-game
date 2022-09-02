module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // plugins: [
    //   [
    //     "module-resolver",
    //     {
    //       alias: {
    //         components: "./src/components",
    //         pages: "./src/pages",
    //         assets: "./src/assets",
    //         utils: "./src/utils",
    //         src: "./src",
    //       },
    //     },
    //   ],
    // ],
  };
};
