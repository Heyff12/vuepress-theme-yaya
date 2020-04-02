<template>
  <div>
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
  </div>
</template>
<script>
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'

export default {
    name:'FrontmatterPagination',
    components: {
        Pagination
    },
    computed: {
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