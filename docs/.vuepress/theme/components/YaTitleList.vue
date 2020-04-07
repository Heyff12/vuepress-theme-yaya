<template>
    <section class="titleListContainer">
      <ul class="pageListItem">
        <li v-for="(page,index) in $pagination.pages" :key="index">
          <YaTextContainer :page="page"/>
        </li>
      </ul>
      <Pagination />
      <!-- <div id="pagination">
        <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
        <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
      </div> -->
    </section>
</template>

<script>
import YaTextContainer from './YaTextContainer.vue'
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'
export default {
    name: 'YaTitleList',
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
      padding:20px;
      box-sizing: border-box;
      margin:20px auto;
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
        padding:10px 0;
        margin:10px auto;
      }
    }
  }
}
</style>
