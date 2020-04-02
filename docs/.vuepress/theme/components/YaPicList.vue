<template>
    <section class="titleListContainer">
      <ul class="pageListItem">
        <li v-for="(page,index) in $pagination.pages" :key="index">
          <div class="img">
            <router-link :to="page.path">
              <img :src="page.frontmatter.imgBg || $site.themeConfig.picListBg" alt="Yaya's blog">
            </router-link>
          </div>
          <section class="text">
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

<style lang="less" scoped>
@import '../styles/variables';

.titleListContainer{
  width: 100%;
  .pageListItem{
  width:100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  li{
    width:48%;
    background-color: white;
    border-radius: 5px;
    padding:0;
    box-sizing: border-box;
    box-shadow: 0px 1px 10px @shadowColor;
    margin:20px 4% 20px 0;
    overflow: hidden;
    &:nth-child(2n){
      margin-right: 0;
    }
    .img{
      width: 100%;
      height: 260px;
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
      }
    }
    .text{
      padding:10px 20px;
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
          padding-left:10px;
        }
      }
    }
    &:hover{
      .img {
        img {
          transition: all .3s;
          transform:scale(1.1);
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
