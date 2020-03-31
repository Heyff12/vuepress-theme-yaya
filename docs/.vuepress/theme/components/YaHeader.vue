<template>
    <section class="header">
        <section class="logo">
            <a href="https://github.com/Heyff12/vuepress-blog-yaya">
                <img :src="$site.themeConfig.logo" alt="Yaya's blog" />
            </a>
        </section>
        <section class="menu">
            <section  class="linkItem"  v-for="(item,index) in navLinkList" :key="index">
                <a :href="item.link" v-if="item.type=='url'">
                    {{item.text}}
                </a>
                <router-link tag="div" :to="item.link" v-else>{{item.text}}</router-link>
            </section>
        </section>
    </section>
</template>

<script>
export default {
    name: 'YaHeader',
    data(){
        return {
            navLinkList: [],
        }
    },
    mounted(){
        console.log(this.$site)
        this.navLinkList = this.$site.themeConfig.locales['/'].nav;
        console.log(this.navLinkList)

    }
}
</script>

<style lang="less" scoped>
@import '../styles/variables';

.header{
    height: 55px;
    display: flex;
    flex-direction: row;
    padding:0 20px;
    width:100%;
    margin:0 auto;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid @shadowColor;
    box-shadow: 0px 1px 20px @shadowColor;
    position: fixed;
    top: 0;
    background-color: white;
    box-sizing: border-box;
    .logo{
        img{
            height: 35px;
            width:auto;
        }
    }
    .menu{
        display: flex;
        flex-direction: row;
        .linkItem{
            padding:0 10px;
        }
    }
}
</style>
