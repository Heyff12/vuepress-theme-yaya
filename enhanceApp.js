
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {

  Vue.mixin({
    methods: {
      setCustomPathPrefix(url){
        const base = siteData.base
        if(base && base!=='/'){
          return base + url.substr(1)
        }
        return url  
      }
    }
  })
  
}