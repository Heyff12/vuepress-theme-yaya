<template>
    <section class="titleListContainer">
      <ul class="pageListItem">
        <li v-for="(page,index) in $pagination.pages" :key="index">
          <div class="img">
            <router-link :to="page.path">
              <img :src="$withBase(page.frontmatter.imgBg || $site.themeConfig.bookListBg)" alt="Yaya's blog">
            </router-link>
          </div>
          <section class="text">
            <section class="textInner">
              <h4>
                <i class="iconfont iconbiaoti"></i>
                <router-link :to="page.path">{{ page.title }}</router-link>
              </h4>
              <footer>
                <span class="date"><i class="iconfont iconriqi"></i>{{page.frontmatter.date || page.lastUpdated}}</span>
              </footer>
              <p class="book">
                <i class="iconfont iconbook"></i>{{page.frontmatter.bookName}}
              </p>
              <p class="book">
                <i class="iconfont iconzuozhe"></i>{{page.frontmatter.author}}
              </p>
              <div class="tags">
                <router-link v-for="tag in page.frontmatter.tags" :to="`/tags/${tag}`" :key="tag">
                  <i class="iconfont icontag"></i>{{tag}}
                </router-link>
              </div>
            </section>
          </section>
        </li>
      </ul>
      <Pagination />
    </section>
</template>

<script>
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'
export default {
    name: 'YaBookList',
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  li{
    width:30%;
    background-color: white;
    border-radius: 5px;
    padding:0;
    box-sizing: border-box;
    box-shadow: 0px 1px 10px @shadowColor;
    margin:20px 5% 20px 0;
    position: relative;
    height: 360px;
    background-color: @themeColor;
    &:nth-child(3n){
      margin-right: 0;
    }
    .img{
      width: 100%;
      height: 100%;
      overflow: hidden;
      padding:0 5px;
      box-sizing: border-box;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .text{
      padding:0;
      position: absolute;
      background-color: rgba(255, 255, 255, .8);
      top: 50%;
      width:100%;
      height: 50%;
      line-height: 30px;
      border-top:2px solid @themeColor;
      .textInner{
        width:100%;
        padding:10px 20px;
        box-sizing: border-box;
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
    .tags{
      color:@grey;

      // margin:10px 0;
      a{
        padding-right:10px;
      }
    }
    .book {
      color:@grey;
    }
      i{
        padding-right: 5px;
      }
    footer {
      display: flex;
      flex-direction: row;
      color:@grey;
      justify-content: space-between;
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
@media screen and (max-width: @midBoobWidth) {
  .titleListContainer{
    .pageListItem{
      li{
        width:48%;
        margin:10px 4% 10px 0;
        height:320px;
        &:nth-child(2n){
          margin-right: 0;
        }
        &:nth-child(3n){
          margin-right: 4%;
        }
        h4{
          margin-bottom: 6px;
          i{
            font-size: 14px;
          }
          a{
            font-size: 14px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: @minWidth) {
  .titleListContainer{
    .pageListItem{
      li{
        width:100%;
        margin:10px 0;
        .text{
          .textInner{
            padding:5px 10px;
          }
        }
        h4{
          margin-bottom: 6px;
          i{
            font-size: 14px;
          }
          a{
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
