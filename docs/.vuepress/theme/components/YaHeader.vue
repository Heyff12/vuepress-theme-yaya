<template>
    <section class="header">
        <section class="headerInner">
            <section class="headerBody">
                <section class="logo">
                    <a href="/">
                        <img :src="$site.themeConfig.logo" alt="Yaya's blog" />
                    </a>
                </section>
                <section class="menu">
                    <section  class="linkItem"  v-for="(item,index) in navLinkList" :key="index">
                        <a :href="item.link">
                            {{item.text}}
                        </a>
                        <div class="hiddenText">
                            {{item.english}}
                        </div>
                    </section>
                </section>
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
    width:100%;
    height: 104px;
    padding:0 10% 0 0;
    margin:0;
    // border-bottom: 1px solid @shadowColor;
    // box-shadow: 0px 1px 20px @shadowColor;
    position: fixed;
    top: 0;
    background-color: white;
    box-sizing: border-box;
    .headerInner{
        width: 100%;
        height: 80px;
        border:3px solid @borderColorTheme;
        border-left:0;
        border-top:0;
        margin:10px 0;
        padding:0 0 0 10%;
        box-sizing: border-box;
        .headerBody{
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .logo{
                width:135px;
                overflow: hidden;
                cursor: pointer;
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
                    cursor: pointer;
                    min-width: 60px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    height: 30px;
                    position: relative;
                    .hiddenText{
                        position: relative;
                        top: -10px;
                        font-size: 12px;
                        opacity: 0;
                        transition: all .3s;
                    }
                    a{
                        color: @textColor;
                    }
                    &:hover{
                        color: @themeColor;
                        a{
                            color: @themeColor;
                        }
                        .hiddenText{
                            opacity: 1;
                            top: 0px;
                        }
                    }
                }
            }
        }
    }
}
</style>
