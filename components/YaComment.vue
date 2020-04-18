<template>
  <div v-if="$site.themeConfig.valine" id="valine-vuepress-comment"></div>
</template>

<script>
export default {
    name:'YaComment',
    mounted() {
        window.AV = require('leancloud-storage')
        window.Valine = require('valine')
        this.initValine()
    },
    methods: {
        initValine() {
            new Valine({
                el: '#valine-vuepress-comment',
                appId: this.$site.themeConfig.valine.appId,
                appKey: this.$site.themeConfig.valine.appKey,
                visitor: true,
                recordIP: true,
                path: window.location.pathname,
                // path: '<%- this.$page.path %>',
                avatar:'robohash',
                pageSizi:15,
                visitor: true,
                recordIP: true,
                lang:'zh-CN',
            })
        }
    }
}
</script>