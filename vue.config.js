module.exports = {
  devServer: {
    host: "0.0.0.0",
    hot: true,
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_variables.scss";
          @import "@/scss/colors.scss";
          @import "@/scss/global.scss";
        `
      }
    }
  }
};
