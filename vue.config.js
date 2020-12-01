module.exports = {
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
