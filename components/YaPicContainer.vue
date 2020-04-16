<template>
    <section class="picContainer">
      <section class="left">
        <YaTextContainer :page="page" />
      </section>
      <section class="right">
        <div class="img">
          <router-link :to="page.path">
            <img :src="$withBase(page.frontmatter.imgBg) || $withBase($site.themeConfig.bookListBg)" alt="Yaya's blog">
          </router-link>
        </div>
      </section>
    </section>
</template>

<script>
import YaTextContainer from './YaTextContainer.vue'
export default {
    name: 'YaPicContainer',
    components: {
      YaTextContainer
    },
    props: ['page'],
}
</script>

<style lang="less" scoped>
@import '../styles/YaPicContainer';

</style>
