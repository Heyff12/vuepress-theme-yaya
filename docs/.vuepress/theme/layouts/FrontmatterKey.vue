<template>
  <ul id="default-layout">
    <li v-for="tag in $frontmatterKey.list">
      <router-link class="page-link" :to="tag.path">{{ tag.name }}</router-link>
    </li>
  </ul>
</template>

<script>

export default {
    name:'FrontmatterKey',
    components: {
    },
    computed: {
    },
    mounted(){
        console.log(this.$site)
        console.log(this.$page)
        console.log(this.$frontmatter)
        console.log(this.$frontmatterKey)
        console.log(this.$frontmatterKey.list)
        // console.log(this.$pagination)
        // console.log(this.$pagination.pages)
    }
}
</script>