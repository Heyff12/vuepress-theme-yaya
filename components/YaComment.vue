<template>
  <div v-if="$site.themeConfig.valine" id="valine-vuepress-comment"></div>
</template>

<script>
const Valine = require('valine')
export default {
    name:'YaComment',
    mounted() {
        if(this.$site.themeConfig.valine){
            this.initValine()
        }
    },
    methods: {
        initValine() {
            new Valine({
                el: '#valine-vuepress-comment',
                appId: this.$site.themeConfig.valine.appId,
                appKey: this.$site.themeConfig.valine.appKey,
                visitor: true,
                recordIP: true,
                path: this.$page.path,
                avatar:'robohash',
                pageSizi:15,
                visitor: true,
                recordIP: true,
                lang:'zh-CN',
                placeholder:'见字如面~'
            })
        }
    }
}
</script>