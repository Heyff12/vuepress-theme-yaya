<template>
    <section class="footer">
        <section class="footer_link">
            <a href="https://github.com/Heyff12/vuepress-blog-yaya" target="_blank">GitHub</a>|
            <a href="/tags">标签</a>
        </section>
        <section class="footer_content">
            <span>Author By Yaya</span>|
            <span>Powered By <a href="https://v1.vuepress.vuejs.org/zh/guide/">VuePress</a></span>|
            <!-- <span>All rights reserved @Yaya</span>| -->
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
@import '../styles/variables';

.footer{
    min-height: 45px;
    display: flex;
    flex-direction: row;
    font-size: 14px;
    color: #829ebb;
    width:100%;
    padding:0 @normalPadding;
    box-sizing: border-box;
    justify-content: space-between;
    margin:35px 0;
    .footer_link{
        a{
            padding: 0 5px;
        }
    }
    .footer_content{
        span{
            padding:0 5px;
        }
    }
}
@media screen and (max-width: @minWidth) {
    .footer{
        padding:0 @minPadding;
        flex-direction: column;
    }
}
</style>
