# Yaya

[![Build Status](https://travis-ci.org/Heyff12/vuepress-theme-yaya.svg?branch=master)](https://travis-ci.org/Heyff12/vuepress-theme-yaya) 

> 一款由纯色线条组成的简约 Vuepsress 博客主题  🎊    
* [参考链接-githubPages](https://heyff12.github.io/vuepress-theme-yaya/)  
* [参考链接-real case](http://vuepressyaya.yaya12.com/)  


## 🏁 特性
🌈 多变的颜色，每次刷新随机颜色  
🚩 分类及标签支持  
📥 文章按照文件夹构建大栏目分类  
👾 搜索  
⛳️ 自定义导航 
🚧 评论及阅读量支持，评论使用参考[valine](https://valine.js.org/),配置themeConfig.valine中的appId、appKey
   该项目docs里面的config.js未配置valine,故看不到评论
🌈 动画首页，需要在 themeCofig增加配置  author、homePageEnterUrl


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
    base:'/',
    theme: 'yaya',
    themeConfig: {
        logo: '/logo.png',
        author: 'Yaya', //首页动画——用于在首页动画展示 作者名称
        homePageEnterUrl: '/study/', //首页动画——enter入口链接
        search: true,
        picListBg: '/bg.jpg',
        workListBg: '/bg.jpg',
        bookListBg: '/book.jpg',
        nextLinks: true,
        prevLinks: true,
        smoothScroll:true,
        nav: [
            { text: '学习', link: '/study/', english: 'Study' },  //文字列表
            { text: '作品', link: '/works/', english: 'Works' },  //一排两图列表
            { text: '读书', link: '/reading/', english: 'Reading' }, //一排三图列表
            { text: '随笔', link: '/writing/', english: 'Writing' }, //右侧有小图片列表
            { text: '关于', link: '/about/', english: 'About' },
        ],
        footer: {
            author: 'Yaya',
            reference:'豫ICP备14017364号-1',
            leftLinks: [
                { text: 'Github', link: 'https://github.com/Heyff12/vuepress-blog-yaya' },
                { text: '标签', link: '/tags' },
            ],
        },
        valine: {
            appId: '',
            appKey: '',
        }
    },
    plugins:[
        ['@vuepress/blog', {
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
        }],
    ]
```

## 🔧 主题修改  

> 可以根据 https://vuepress.vuejs.org/zh/theme/writing-a-theme.html 官方文档修改该主题样式   



