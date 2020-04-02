<template>
  <section class="pageList">
    <section class="pageListInner">
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
    </section>
  </section>
</template>
<script>
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'
export default {
    name:'Layout',
    components: {
      Pagination
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
<style lang="less" scoped>
@import '../styles/variables';

.pageList{
  width: 100%;
  padding:0 0 0 10%;
  background-color: white;
  box-sizing: border-box;
  .pageListInner{
    width: 100%;
    border:3px solid @borderColorTheme;
    border-right:0;
    border-bottom:0;
    margin:10px 0;
    padding:20px 10% 20px 20px;
    box-sizing: border-box;
  }
}
</style>
