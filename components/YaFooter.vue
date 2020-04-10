<template>
    <section class="footer">
        <section class="footer_link">
            <a 
                v-for="(link,index) in $site.themeConfig.footer.leftLinks" 
                :key="index" :href="link.link" 
                :target="/^\//.test(link.link) ? '_self' : '_blank'"
            >
                {{link.text}}
            </a>
        </section>
        <section class="footer_content">
            <span>Author By {{$site.themeConfig.footer.author}}</span>|
            <span>Powered By <a href="https://v1.vuepress.vuejs.org/zh/guide/">VuePress</a></span>|
            <!-- <span>All rights reserved @Yaya</span>| -->
            <span>{{$site.themeConfig.footer.reference}}</span>
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
            padding: 0 5px 0 5px;
            position: relative;
            &:after {
                content: '|';
                position: absolute;
                right: 0;
                color: @grey;
                font-weight: normal;
            }
            &:last-child{
                &::after{
                    display: none;
                }
            }
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
