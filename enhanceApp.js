import themeCustomConfig from '@theme/utils/themeCustomConfig'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {

  console.log(themeCustomConfig)
  console.log(siteData)
  const mergedConfig = {...siteData,...themeCustomConfig}
  console.log(mergedConfig)
  siteData = mergedConfig
  console.log(siteData)

  Object.assign(siteData, themeCustomConfig)
}