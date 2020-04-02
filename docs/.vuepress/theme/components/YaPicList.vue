<template>
    <section class="titleListContainer">
      <ul class="pageListItem">
        <li v-for="(page,index) in $pagination.pages" :key="index">
          <section class="left">
            <h4>
              <i class="iconfont iconbiaoti"></i>
              <router-link :to="page.path">{{ page.title }}</router-link>
            </h4>
            <p class="summary">
              <router-link :to="page.path">{{page.frontmatter.summary}}</router-link>             
            </p>
            <footer>
              <span class="date"><i class="iconfont iconriqi"></i>{{page.lastUpdated}}</span>
              <div class="tags">
                <a v-for="tag in page.frontmatter.tags" :href="`/tags/${tag}`">
                  <i class="iconfont icontag"></i>{{tag}}
                </a>
              </div>
            </footer>
          </section>
          <section class="right">
            <div class="img">
              <router-link :to="page.path">
                <img :src="page.frontmatter.imgBg || $site.themeConfig.bookListBg" alt="Yaya's blog">
              </router-link>
            </div>
          </section>
        </li>
      </ul>
      <Pagination />
    </section>
</template>

<script>
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'
export default {
    name: 'YaPicList',
    components: {
      Pagination
    },
    mounted(){
        console.log(this.$page)
        console.log(this.$frontmatter)
        console.log(this.$frontmatterKey)
        // console.log(this.$frontmatterKey.list)
        console.log(this.$pagination)
        console.log(this.$pagination.pages)
    }
}
</script>

<style lang="less" scoped>
@import '../styles/variables';

.titleListContainer{
  width: 100%;
  .pageListItem{
  width:100%;
  li{
    width:100%;
    background-color: white;
    border-bottom:1px solid @borderColor;
    border-radius: 5px;
    margin:20px auto;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    .left{
      flex:1;
      padding:20px;
      box-sizing: border-box;
    }
    .right {
      width:280px;
      max-height:220px;
      .img{
        width: 100%;
        height: 100%;
        overflow: hidden;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
    h4{
      margin-bottom: 15px;
      i{
        color:@themeColor;
        font-size: 20px;
        padding-right: 10px;
      }
      a{
        font-size: 18px;
      }
    }
    .summary{
      margin-bottom: 10px;
      color:@grey;
      a {
        color:@grey;
        &:hover{
          color:@grey;
        }
      }
    }
    footer {
      display: flex;
      flex-direction: row;
      color:@grey;
      justify-content: space-between;
      i{
        padding-right: 5px;
      }
      .tags{
        a{
          // color:@orange;
          padding-left:10px;
        }
      }
    }
    &:hover{
      box-shadow: 0px 1px 10px @shadowColor;
      h4 {
        i {
          animation: rotate .5s infinite linear;
          -webkit-animation: rotate 1s infinite linear ;
          -webkit-transform-origin: center center;
          -ms-transform-origin: center center;
          transform-origin: center center;
        }
      }
    }
  }
}
}

@keyframes rotate
{
  from {
    transform:rotate(0deg)
  }
  to {
    transform:rotate(-360deg)
  }
}
</style>
