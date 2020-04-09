<template>
    <section class="titleListContainer">
      <ul class="pagePicListItem">
        <li v-for="(page,index) in $pagination.pages" :key="index">
          <YaPicContainer :page="page" />
        </li>
      </ul>
      <Pagination />
    </section>
</template>

<script>
import YaPicContainer from '@theme/YaPicContainer.vue'
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
@import '../styles/YaPicList';

.titleListContainer{
  width: 100%;
}
</style>
