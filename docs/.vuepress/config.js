module.exports = {
  title: "Yaya's blog",
  description: "developer",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  base: "/vuepress-theme-yaya/",
  theme: require.resolve("../../"),
  themeConfig: {
    logo: "/logo.png",
    author: "Yaya",
    homePageEnterUrl: "/study/",
    search: true,
    picListBg: "/bg.jpg",
    workListBg: "/bg.jpg",
    bookListBg: "/book.jpg",
    alipay: "/alipay.png", //支付宝打赏二维码
    wechat: "/wechat.png", //微信打赏二维码
    nextLinks: true,
    prevLinks: true,
    smoothScroll: true,
    nav: [
      { text: "学习", link: "/study/", english: "Study" },
      { text: "作品", link: "/works/", english: "Works" },
      { text: "读书", link: "/reading/", english: "Reading" },
      { text: "随笔", link: "/writing/", english: "Writing" },
      { text: "关于", link: "/about/", english: "About" },
    ],
    footer: {
      author: "Yaya",
      reference: "豫ICP备14017364号-1",
      leftLinks: [
        {
          text: "Github",
          link: "https://github.com/Heyff12/vuepress-blog-yaya",
        },
        { text: "标签", link: "/tags" },
      ],
    },
  },
};
