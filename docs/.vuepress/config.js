module.exports = {
    title: "Yaya's blog",
    description: 'developer',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    base:'/',
    theme: require.resolve('../../'),
    themeConfig: {
        logo: '/logo.png',
        search: true,
        picListBg: '/bg.jpg',
        workListBg: '/bg.jpg',
        bookListBg: '/book.jpg',
        nextLinks: true,
        prevLinks: true,
        nav: [
            { text: '学习', link: '/study/', english: 'Study' },
            { text: '作品', link: '/works/', english: 'Works' },
            { text: '读书', link: '/reading/', english: 'Reading' },
            { text: '随笔', link: '/writing/', english: 'Writing' },
            { text: '关于', link: '/about/', english: 'About' },
        ],
        footer: {
            author: 'Yaya',
            reference:'豫ICP备14017364号-1',
            leftLinks: [
                { text: 'Github', link: 'https://github.com/Heyff12/vuepress-blog-yaya' },
                { text: '标签', link: '/tags' },
            ],
        }
    },
    markdown: {
        lineNumbers: true
    },
    plugins: [
        '@vuepress/back-to-top',
        [
            '@vuepress/last-updated',
            {
              transformer: (timestamp, lang) => {
                // 不要忘了安装 moment
                const moment = require('moment')
                moment.locale(lang)
                return moment().format('YYYY-MM-D')
                return moment(timestamp).fromNow()
              }
            }
        ],
        '@vuepress/plugin-nprogress',
        ['@vuepress/search', {
            searchMaxSuggestions: 6
        }],
        // [
        //     'vuepress-plugin-comment',
        //     {
        //       choosen: 'valine', 
        //       // options选项中的所有参数，会传给Valine的配置
        //       options: {
        //         el: '#valine-vuepress-comment',
        //         appId: 'Your own appId',
        //         appKey: 'Your own appKey',
        //         path: '<%- page.path %>',
        //         avatar:'robohash',
        //         pageSizi:15,
        //         visitor: true,
        //         recordIP: true,
        //         lang:'zh-CN',
        //       }
        //     }
        // ],
        [
            '@vuepress/blog',
            {
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
                    }, {
                        id: "categories",         // 再 Vue 实例中的名称
                        keys: ['categories'],
                        path: '/categories/',
                        layout: 'FrontmatterKey',  //defaults to `FrontmatterKey.vue`
                        frontmatter: { title: '分类检索文章' },
                    },
                ],
            },
        ],
    ]
}