<template>
    <section class="footer">
        <section class="footer_link">
            <a href="https://github.com/Heyff12/vuepress-blog-yaya">GitHub</a>
        </section>
        <section class="footer_content">
            <span>Author By Yaya</span>|
            <span>Powered By <a href="https://v1.vuepress.vuejs.org/zh/guide/">VuePress</a></span>|
            <span>All rights reserved @Yaya</span>|
            <span>豫ICP备14017364号-1</span>
        </section>
    </section>
</template>

<script>
export default {
    name: 'YaFooter'
}
</script>

<style lang="less" scoped>
.footer{
    height: 45px;
    display: flex;
    flex-direction: row;
    font-size: 12px;
    color: #829ebb;
    padding:0 20px;
    width:1200px;
    margin:0 auto;
    justify-content: space-between;
    .footer_content{
        span{
            padding:0 5px;
        }
    }
}
</style>
