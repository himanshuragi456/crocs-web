module.exports = {
     css: {
          loaderOptions: {
               sass: {
                    prependData: `
          @import "@/style/abstracts/_variables.scss";
          @import "@/style/abstracts/_mixins.scss";
          `,
               },
          },
     },
};
