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
                    { text: '学习', link: '/study/' },
                    { text: '关于', link: '/about/' },
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
}