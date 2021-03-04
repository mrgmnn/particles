// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    examples: { url: "/", static: true, resolve: true },
    src: { url: "/src", static: false, resolve: true },
  },
  plugins: [
    [
      "@snowpack/plugin-optimize",
      {
        minifyJS: true,
        minifyCSS: true,
        minifyHTML: true,
        preloadModules: true,
      }
    ],
    // [
    //   '@snowpack/plugin-webpack'
    // ],
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
}
