<template>
    <section class="titleListContainer">
      <ul class="pageListItem">
        <li v-for="(page,index) in $pagination.pages" :key="index">
          <div class="img">
            <router-link :to="page.path">
              <img :src="page.frontmatter.imgBg || $site.themeConfig.workListBg" alt="Yaya's blog">
            </router-link>
          </div>
          <section class="text">
            <YaTextContainer :page="page"/>
          </section>
        </li>
      </ul>
      <Pagination />
    </section>
</template>

<script>
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'
import YaTextContainer from '@theme/YaTextContainer.vue'
export default {
    name: 'YaWorkList',
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
        height: 100%;
        object-fit: cover;
      }
    }
    .text{
      width: 100%;
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
@media screen and (max-width: @midWidth) {
  .titleListContainer{
    .pageListItem{
      li{
        .img{
          height: 220px;
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
        .img{
          height: 200px;
        }
      }
    }
  }
}
</style>
