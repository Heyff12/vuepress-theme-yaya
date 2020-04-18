// module.exports = {
//     extend: '@vuepress/theme-default',
//     globalLayout: '/layouts/GlobalLayout.vue', 
// }

module.exports = (themeConfig, ctx) => {
  
    const blogOptions = {
        directories: [
            {
                // Unique ID of current classification
                id: 'study',
                // Target directory
                dirname: 'study',
                // Path of the `entry page` (or `list page`)
                path: '/study/',
                // layout: 'Layout',
                //   itemPermalink: '/:year/:month/:day/:slug',
                itemPermalink: '/:regular',
                pagination: {
                    lengthPerPage: 10,
                },
            },
            {
                id: 'works',
                dirname: 'works',
                path: '/works/',
                itemPermalink: '/:regular',
                layout: 'LayoutWork',
                pagination: {
                    lengthPerPage: 6,
                },
            },
            {
                id: 'reading',
                dirname: 'reading',
                path: '/reading/',
                itemPermalink: '/:regular',
                layout:'LayoutBook',
                pagination: {
                    lengthPerPage: 9,
                },
            },
            {
                id: 'writing',
                dirname: 'writing',
                path: '/writing/',
                itemPermalink: '/:regular',
                layout:'LayoutPic',
                pagination: {
                    lengthPerPage: 8,
                },
            },
        ],
        frontmatters: [
            {
                id: "tags",
                keys: ['tags'],
                path: '/tags/',
                layout: 'FrontmatterKey',  //defaults to `FrontmatterKey.vue`
                frontmatter: { title: '分类检索文章' },
                // itemlayout: 'Layout',
            }
        ],
    }
  
    const plugins = [
        ['@vuepress/back-to-top'],
        [
            '@vuepress/last-updated',
            {
              transformer: (timestamp, lang) => {
                const moment = require('moment')
                moment.locale(lang)
                return moment().format('YYYY-MM-D')
              }
            }
        ],
        ['@vuepress/plugin-nprogress'],
        ['@vuepress/search', {
            searchMaxSuggestions: 6
        }],
        ['@vuepress/blog', blogOptions],
    ]
  
    const config = {
      extend: '@vuepress/theme-default',
      globalLayout: '/layouts/GlobalLayout.vue',
      plugins,
    }
  
    return config
  }