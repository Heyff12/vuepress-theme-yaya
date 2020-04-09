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
@import '../styles/pageTitleList';

.titleListContainer{
  width: 100%;
}
</style>
