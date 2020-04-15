# Yaya

> 一款由纯色线条组成的简约 Vuepsress 博客主题  🎊    
[参考链接](http://vuepressyaya.yaya12.com/) 

## 🏁 特性
🌈 多变的颜色，每次刷新随机颜色  
🚩 分类及标签支持  
📥 文章按照文件夹构建大栏目分类  
👾 搜索  
⛳️ 自定义导航 
🚧 开发中：评论及阅读量支持

## 🚧 安装

```
npm i vuepress-theme-yaya
```

## 🔧 主题设置

配置 `docs/.vupress/config.js`

```js
    title: "Yaya's blog",
    description: 'developer',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    theme: 'yaya',   //主题
    themeConfig: {
        logo: '/logo.png',  //logo
        search: true,
        picListBg: '/bg.jpg',  // 右图列表，默认图片
        workListBg: '/bg.jpg',  // 横排2条图文列表，默认图片
        bookListBg: '/book.jpg',  // 横排3条图文列表，默认图片
        nextLinks: true,
        prevLinks: true,
        //自定义导航
        nav: [
            { text: '学习', link: '/study/', english: 'Study' },
            { text: '作品', link: '/works/', english: 'Works' },
            { text: '读书', link: '/reading/', english: 'Reading' },
            { text: '随笔', link: '/writing/', english: 'Writing' },
            { text: '关于', link: '/about/', english: 'About' },
        ]
    },
    plugins: [
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
                        // layout: 'Layout', //默认组件Layout
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
                    }
                ],
            },
        ],
    ]
```

## 🔧 主题修改  

> 可以根据 https://vuepress.vuejs.org/zh/theme/writing-a-theme.html 官方文档修改该主题样式   



