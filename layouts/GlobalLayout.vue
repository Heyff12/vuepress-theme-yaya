<template>
  <div id="globalLayout">
    <template v-if="isIndex">
      <component :is="layout"/>
    </template>
    <template v-else>
      <YaHeader />
      <section class="global-body">
        <component :is="layout"/>
      </section>
      <YaFooter />
    </template>
  </div>
</template>

<script>
import YaHeader from '@theme/components/YaHeader'
import YaFooter from '@theme/components/YaFooter'
export default {
    name:'GlobalLayout',
    components: {
        YaHeader,
        YaFooter,
    },
    data(){
      return{
        isIndex:false
      }
    },
    computed: {
        layout () {
          if (this.$page.path) {
            const layoutValue = this.$frontmatter.layout
            if (layoutValue) {
              this.isIndex = layoutValue==='Index'
             // 你也可以像默认的 globalLayout 一样首先检测 layout 是否存在
              return layoutValue
            }
            return 'Layout'
          }
          return 'NotFound'
        }
    }
}
</script>

<style scoped>
@import '../styles/app.less';
.global-body{
  margin-top: 104px;
  width:100%;
}
</style>>