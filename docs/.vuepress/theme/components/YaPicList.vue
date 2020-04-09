<template>
    <section class="titleListContainer">
      <ul class="pageListItem">
        <li v-for="(page,index) in $pagination.pages" :key="index">
          <YaPicContainer :page="page" />
        </li>
      </ul>
      <Pagination />
    </section>
</template>

<script>
import YaPicContainer from './YaPicContainer.vue'
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'
export default {
    name: 'YaPicList',
    components: {
      Pagination,YaPicContainer
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
      overflow: hidden;
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
      }
    }
  }
}
</style>
