module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
              @import "@/assets/scss/reset.scss";
              @import "@/assets/scss/mixins.scss";
            `,
      },
    },
  },
  publicPath:
    process.env.NODE_ENV === "production" ? "/clone_navercareers/" : "/",
};
