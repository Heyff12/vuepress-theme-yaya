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
        smoothScroll:true,
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
        },
        valine: {
            appId: 'OHPzKSvAHh9kiuiJ1364y4QV-gzGzoHsz',
            appKey: 'D1wtp2PmL2rmewVPEstmjlEB',
        }
    },
    markdown: {
        lineNumbers: true,
        extractHeaders: [ 'h1','h2', 'h3', 'h4' ]
    },
    plugins: [
        // [
        //     'vuepress-plugin-comment',
        //     {
        //       choosen: 'valine', 
        //       // options选项中的所有参数，会传给Valine的配置
        //       options: {
        //         el: '#valine-vuepress-comment',
        //         appId: 'OHPzKSvAHh9kiuiJ1364y4QV-gzGzoHsz',
        //         appKey: 'D1wtp2PmL2rmewVPEstmjlEB',
        //         path: '<%- page.path %>',
        //         avatar:'robohash',
        //         pageSizi:15,
        //         visitor: true,
        //         recordIP: true,
        //         lang:'zh-CN',
        //       },
        //     }
        // ],
    ]
}