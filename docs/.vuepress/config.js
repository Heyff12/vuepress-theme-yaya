module.exports = {
    title: "Yaya's blog",
    description: 'developer',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    //配置多语言筛选项
    locales: {
        '/': {
            lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
            title: "",
            description: 'IT博客，记录学习点滴、生活点滴'
        },
        '/en/': {
            lang: 'en-US',
            title: "",
            description: "blog,IT development,front-end,IT,web desing"
        }
    },
    themeConfig: {
        logo: '/logo.png',
        search: true,
        pageNum: 2,
        listBg: '/bg.jpg',
        locales: {
            '/': {
                selectText: '选择语言',
                label: '简体中文',
                editLinkText: '在 GitHub 上编辑此页',
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新"
                    }
                },
                algolia: {},
                nav: [
                    { text: '学习', link: '/study/', english: 'Study' },
                    { text: '作品', link: '/works/', english: 'Works' },
                    { text: '读书', link: '/reading/' , english: 'Reading'},
                    { text: '随笔', link: '/writing/', english: 'Writing' },
                    { text: '标签', link: '/tags/', english: 'Tags' },
                    // { text: '分类', link: '/categories/' , english: 'categories'},
                    { text: '关于', link: '/about/', english: 'About' },
                ]
            },
            '/en/': {
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                algolia: {},
                nav: [
                    { text: 'About', link: '/en/about/' },
                ]
            }
        }
    },
    markdown: {
        lineNumbers: true
    },
    plugins: [
        '@vuepress/back-to-top',
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
                  pagination: {
                    lengthPerPage: 20,
                  },
                },
                {
                  id: 'reading',
                  dirname: 'reading',
                  path: '/reading/',
                  pagination: {
                    lengthPerPage: 20,
                  },
                },
              ],
              frontmatters: [
                {
                  id: "tags",
                  keys: ['tags'],
                  path: '/tags/',
                  //layout: 'Tags',  //defaults to `FrontmatterKey.vue`
                  frontmatter: { title: '分类检索文章' },
                //   itemlayout: 'FrontmatterKey',
                },{
                    id: "categories",         // 再 Vue 实例中的名称
                    keys: ['category'],
                    path: '/categories/',
                    //layout: 'Categories',  //defaults to `FrontmatterKey.vue`
                    frontmatter: { title: '分类检索文章' },
                  },
              ]
            },
        ],
    ]
}