<template>
  <div id="global-layout">
    <YaHeader />
    <!-- <DefaultGlobalLayout/> -->
    <section class="global-body">
      <component :is="layout"/>
    </section>
    <YaFooter />
  </div>
</template>

<script>
import YaHeader from '../components/YaHeader'
import YaFooter from '../components/YaFooter'
import GlobalLayout from '@app/components/GlobalLayout.vue'
export default {
    name:'GlobalLayout',
    components: {
        YaHeader,
        YaFooter,
        DefaultGlobalLayout: GlobalLayout,
    },
    computed: {
        layout () {
        if (this.$page.path) {
            if (this.$frontmatter.layout) {
            // 你也可以像默认的 globalLayout 一样首先检测 layout 是否存在
            return this.$frontmatter.layout
            }
            return 'Layout'
        }
        return 'NotFound'
        }
    }
}
</script>

<style scoped>
.global-body{
  padding-top: 100px;
}
</style>>