<template>
    <section class="titleListContainer">
      <ul class="pageListItem">
        <li v-for="(page,index) in $pagination.pages" :key="index">
          <section class="left">
            <YaTextContainer :page="page" />
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
import YaTextContainer from './YaTextContainer.vue'
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'
export default {
    name: 'YaPicList',
    components: {
      Pagination,YaTextContainer
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
    &:hover{
      box-shadow: 0px 1px 10px @shadowColor;
    }
  }
}
}
@media screen and (max-width: @minWidth) {
  .titleListContainer{
    .pageListItem{
      li{
        margin:10px 0;
        .left{
          padding:0;
        }
        .right{
          width:80px;
          max-height: 80px;
        }
      }
    }
  }
}
</style>
