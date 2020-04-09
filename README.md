# 一、vuepress启动  

```
mkdir vuepress-blog-yaya
cd vuepress-blog-yaya
npm init    //生成package.json

npm install -D vuepress
mkdir docs
echo '# Hello VuePress!' > docs/README.md
```  
修改package.json
```
"scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
},
``` 
启动项目,http://localhost:8080/
```
npm run dev
```  

# 二、vuepress默认基础设置

## 1、配置目录  

├── docs  
│   ├── .vuepress (可选的)   
│   │   ├── theme (可选的)   
│   │   │   └── styles    
│   │   │   │   └──  index.styl   
│   │   │   │   └──  palette.styl  
│   │   │   └── index.js   
│   │   │   └── enhanceApp.js (可选的)  
│   │   ├── public (可选的)       
│   │   │   └── favicon.ico          
│   │   │   └── logo.png   
│   │   └── config.js (可选的)   
│   ├── README.md  
│   ├── study  
│   │   └── aaa.md  
│   ├── about  
│   │   └── README.md  
│   ├── en  
│   │   ├── about    
│   │   │   └── README.md  
└── package.json  

## 2、部分文件设置

theme/enhanceApp.js 
```
// 使用异步函数也是可以的
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  // ...做一些其他的应用级别的优化
}
``` 
theme/index.js  
```
module.exports = {
    extend: '@vuepress/theme-default'
}
```
theme/styles/index.styl
```
html,body{
    margin:0;
    padding:0;
}
h1,h2,h3,h4,h5,h6,ul,li,p,div,dl,dt,dd,img{
    margin:0;
    padding:0;
}
```
theme/styles/palette.styl,默认的参数
```
// 颜色
$accentColor = #3eaf7c
$textColor = #2c3e50
$borderColor = #eaecef
$codeBgColor = #282c34
$arrowBgColor = #ccc
$badgeTipColor = #42b983
$badgeWarningColor = darken(#ffe564, 35%)
$badgeErrorColor = #DA5961

// 布局
$navbarHeight = 3.6rem
$sidebarWidth = 20rem
$contentWidth = 740px
$homePageWidth = 960px

// 响应式变化点
$MQNarrow = 959px
$MQMobile = 719px
$MQMobileNarrow = 419px
```
config.js  
```
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
```

## 3、配置less  
```
npm install -D less less-loader
```

# 三、vuepress插件使用  

## 1、返回顶部  
```
npm install -D @vuepress/plugin-back-to-top
``` 
修改 config.js
```
plugins: ['@vuepress/back-to-top']
```

# 四、vuepress自定义主题  
## 1、配置404页面  
theme/layouts/404.vue  
```
<template>
  <section class="error">
    <h1 class="error-code">404</h1>
    <p class="error-description">Page not found</p>
    <router-link :to="$localePath" class="error-home">home</router-link>
  </section>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="less" scoped>
.error{
    display: flex;
    flex-direction: column;
    align-items: center;
    .error-code{
        font-size: 12vw;
        color: #d6dadc;
    }
    .error-description {
        border-left: 8px solid #d6dadc;
        padding-left: 20px;
        font-size: 2rem;
        color: #2c3e50;
        font-weight: 400;
        opacity: 0.5;
        transition: color 0.5s ease-in-out;
    }
    .error-home {
        display: inline-block;
        margin: 2rem 0 4rem;
        font-size: 2rem;
        color: #3eaf7c;
        transition: color 0.5s ease-in-out;
    }
}
</style>

```
## 2、配置默认全局页面，以及头部、底部
theme/layouts/GlobalLayout.vue  
```
<template>
  <div id="global-layout">
    <!-- <YaHeader /> -->
    <component :is="layout"/>
    <YaFooter />
  </div>
</template>

<script>
import YaHeader from '../components/YaHeader'
import YaFooter from '../components/YaFooter'
export default {
    name:'GlobalLayout',
    components: {
        YaHeader,
        YaFooter,
    },
    computed: {
        layout () {
        if (this.$page.path) {
            if (this.$frontmatter.layout) {
            // 你也可以像默认的 globalLayout 一样首先检测 layout 是否存在
            return this.$frontmatter.layout
            }
            return 'Layout'
        }
        return 'NotFound'
        }
    }
}
</script>
```

theme/components/YaFooter.vue 
```
<template>
    <section class="footer">
        <section class="footer_link">
            <a href="https://github.com/Heyff12/vuepress-blog-yaya">GitHub</a>
        </section>
        <section class="footer_content">
            <span>Author By Yaya</span>|
            <span>Powered By <a href="https://v1.vuepress.vuejs.org/zh/guide/">VuePress</a></span>|
            <span>All rights reserved @Yaya</span>|
            <span>豫ICP备14017364号-1</span>
        </section>
    </section>
</template>

<script>
export default {
    name: 'YaFooter'
}
</script>

<style lang="less" scoped>
.footer{
    height: 45px;
    display: flex;
    flex-direction: row;
    font-size: 12px;
    color: #829ebb;
    padding:0 20px;
    width:1200px;
    margin:0 auto;
    justify-content: space-between;
    .footer_content{
        span{
            padding:0 5px;
        }
    }
}
</style>
```

## 3、配置列表页  
theme/layouts/List.vue,需要在相关文件进行微小处理
```
<template>
  <section class="pageList">
    <section class="categoryList">
      <ul>
        <li 
          @click="changeTag('all')" 
          :class="nowTag=='all'?'selectTag':''"  
        >
          全部
        </li>
        <li 
          v-for="tag in tagList"
          @click="changeTag(tag)" 
          :class="nowTag==tag?'selectTag':''"  
        >
          {{tag}}
        </li>
      </ul>
    </section> 
    <section class="pageBody">
      <section class="pageContent">
        <div 
          v-if="item&&item.frontmatter.layout!='List'" 
          class="pageContentItem" 
          @click="goArticle(item.path)"
          v-for="(item,index) in nowList"
          :key="index"
        >
            <div class="pageImg">
              <img class="catalog-icon" :src="item.frontmatter.img || $site.themeConfig.listBg"/>
            </div>
            <div class="pageTitle">
              {{item.title?item.title:'未命名'}}
            </div>
            <div class="pageFooter">
              <dl>
                <dt>Tag:</dt>
                <dd>{{item.tag}}</dd>
              </dl>
              <dl>
                <dt>Date:</dt>
                <dd>{{item.lastUpdated}}</dd>
              </dl>
            </div>
        </div>
      </section>
      <section class="pagenation">
        <div @click="choosePage(item-1)" 
          class="pageItem" 
          :class="{'active':pageId==item-1}"
          v-for="item in pageNum"
        >
            {{item}}
        </div>
      </section>
    </section>
  </section>
</template>

<script>
export default {
    name:'PageList',
    data() {
        return {
            catalogList: [], //所有页面
            tagList: [], //所有类别列表
            pageId: 1,
            pageNum: null,//分页，页数
            nowList: [], //当前页列表页面
            everyPageNumber: 10,//每页多少个
            nowTag: 'all',
        }
    },
    mounted() {
      console.log(this.$route)
        this.everyPageNumber = this.$site.themeConfig.pageNum?this.$site.themeConfig.pageNum:10;
        this.nowTag = this.$route.query.type?this.$route.query.type:'all';
        this.init(this.nowTag);
        this.choosePage(0);
        this.getTag();
    },
    methods: {
        changeTag(val) {
            this.nowTag=val;
            this.init(val);
            this.choosePage(0);
        },
        choosePage(num) {
            this.pageId = num;
            var startIndex = this.pageId * this.everyPageNumber;
            var endIndex = startIndex + this.everyPageNumber - 1;
            this.nowList = this.catalogList.filter((element, index) => {
                if (index >= startIndex && index <= endIndex) {
                    return element;
                }
            })
            console.log('---------------this.nowList-------------------------')
            console.log(this.nowList)
        },
        goArticle(link) {
            this.$router.push(link)
        },
        getTag() {
            var list = this.$site.pages;
            list.forEach(element => {
                var str = element.regularPath;
                var taglist = str.split('/').reverse();
                var l = decodeURIComponent(taglist[1]);
                if (l != '') {
                    this.tagList.push(l);
                }
            })
            this.tagList = new Set(this.tagList);
        },
        init(tagType) {
            //获得所有文章
            var length = 0;//记录长度
            var pages = this.$site.pages;
            console.log(pages)
            this.catalogList = pages.filter((element) => {
                // if (element.title != 'Home') {
                    var taglist = element.relativePath.split('/').reverse();
                    element.tag = decodeURIComponent(taglist[1]);
                    console.log(element)

                    if (tagType == 'all') {
                        length = length + 1;
                        return element;
                    } else {
                        if (tagType == element.tag) {
                            length = length + 1;
                            return element;
                        }
                    }
                // }
            })
            console.log(this.catalogList)
            this.pageNum = Math.ceil(length / this.everyPageNumber);
        }
    }
}
</script>
<style lang="less" scoped>
@import '../styles/variables.less';
.pageList{
    display: flex;
    flex-direction: column;
    width:1200px;
    margin:10px auto;
    .categoryList{
      width:100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      ul{
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: row;
        li{
          margin-right: 10px;
          &.selectTag{
            color: @themeColor;
          }
        }
      }
    }
    .pageBody{
      width:100%;
      .pageContent{
        width:100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        margin:20px 0;
        .pageContentItem{
          width:30%;
          margin:0 5% 15px 0;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          background:@bgColor;
          border-radius: 8px;
          overflow: hidden;
            box-shadow: 0 2px 6px @shadowColor;
          &:nth-child(3n){
            margin-right: 0;
          }
          .pageImg{
            width:100%;
            img{
              height: auto;
              width:100%;
            }
          }
          .pageTitle{
            width: 100%;
          }
          .pageFooter{
            width:100%;
            color:@grey;
            font-size: 12px;
            dl{
              width:100%;
              display: flex;
              flex-direction: row;
              dt{
                margin-right: 6px;
              }
            }
          }
        }
      }
      .pagenation {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .pageItem{
          width:50px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          cursor: pointer;
          &.active{
            color: @themeColor;
          }
        }
      }
    }
}
</style>
```
## 4、vuepress全局计算属性
```
$site
$page
$frontmatter
$lang
$localePath
$title
$description
$themeConfig
```

## 5、整体思路  
* 根据每篇markdown的tags/tag进行tag标签分类
* 根据每篇markdown的category/categories进行分类
* 使用vuepress的全局计算属性为自定义layout提供数据


# 五、使用@vuepress/plugin-blog插件自定义主题  

## 1、参考链接  
[@vuepress/plugin-blog官方文档](https://vuepress-plugin-blog.ulivz.com/guide/)

[@vuepress/theme-blog官方文档](https://vuepress-theme-blog.ulivz.com/)

## 2、安装并引用  
```
npm install -D @vuepress/plugin-blog
```
在config.js进行配置,并增加响应文件  
```
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
                }
              ]
            },
        ],
    ]
```

## 3、默认页面  
* 列表页/tags列表页——Default: 'IndexPost' || 'Layout'
* 详情页——Default: 'Post'  

## 4、添加列表页  
theme/layouts/Layout.vue
```
<template>
  <div>
    <ul id="default-layout">
      <li v-for="page in $pagination.pages" :key="page">
        <router-link class="page-link" :to="page.path">{{ page.title }}</router-link>
      </li>
    </ul>
    <div id="pagination">
      <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
      <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
    </div>
  </div>
</template>
<script>

export default {
    name:'Layout',
    components: {
    },
    computed: {
    },
    mounted(){
        console.log(this.$site)
        console.log(this.$page)
        console.log(this.$frontmatter)
        console.log(this.$pagination)
        console.log(this.$pagination.pages)
    }
}
</script>
```
## 5、设置tags列表页  
theme/layouts/FrontmatterKey.vue
```
<template>
  <ul id="default-layout">
    <li v-for="tag in $frontmatterKey.list">
      <router-link class="page-link" :to="tag.path">{{ tag.name }}</router-link>
    </li>
  </ul>
</template>

<script>

export default {
    name:'FrontmatterKey',
    components: {
    },
    computed: {
    },
    mounted(){
        console.log(this.$site)
        console.log(this.$page)
        console.log(this.$frontmatter)
        console.log(this.$frontmatterKey)
        console.log(this.$frontmatterKey.list)
        // console.log(this.$pagination)
        // console.log(this.$pagination.pages)
    }
}
</script>
```
theme/layouts/FrontmatterPagination.vue

```
<template>
  <div>
    <ul id="default-layout">
      <li v-for="page in $pagination.pages" :key="page">
        <router-link class="page-link" :to="page.path">{{ page.title }}</router-link>
      </li>
    </ul>
    <Pagination />
    <!-- <div id="pagination">
      <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
      <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
    </div> -->
  </div>
</template>
<script>
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'

export default {
    name:'FrontmatterPagination',
    components: {
        Pagination
    },
    computed: {
    },
    mounted(){
        console.log(this.$site)
        console.log(this.$page)
        console.log(this.$frontmatter)
        console.log(this.$frontmatterKey)
        // console.log(this.$frontmatterKey.list)
        console.log(this.$pagination)
        console.log(this.$pagination.pages)
    }
}
</script>
```

# 六、现在我们可以随意更改成我们想要的blog样式了

## 1、思路汇总  
 * 通过文件夹设置路由模块
 * 通过tags or category 设置分类