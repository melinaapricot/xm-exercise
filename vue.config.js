module.exports = {
    css: {
      loaderOptions: {
        sass: {
          additionalData: '@import "@/assets/_variables.scss";',
          implementation: require('node-sass')
        },
      },
    },
  
  };