<template>
    <section class="header">
        <section class="headerInner" :style="{borderColor:color}">
            <!-- <section class="headerSearch">
                <SearchBox />
            </section> -->
            <section class="headerBody">
                <section class="logo">
                    <a href="/">
                        <img :src="$site.themeConfig.logo" alt="Yaya's blog" />
                    </a>
                </section>
                <section class="menu">
                    <section  :class="['linkItem',{'active':currentNav.indexOf(item.link)>-1}]"  v-for="(item,index) in navLinkList" :key="index">
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
import SearchBox from '@SearchBox'
import { changeColor } from '../utils/changeColor'

export default {
    name: 'YaHeader',
    components: {
        SearchBox
    },
    data(){
        return {
            navLinkList: [],
            color:'',
            currentNav: '/',
        }
    },
    mounted(){
        console.log(this.$route)
        console.log(this.$site)
        this.navLinkList = this.$site.themeConfig.locales['/'].nav;
        this.currentNav = this.$route.path
        this.color = changeColor(true)
    }
}
</script>

<style lang="less" scoped>
@import '../styles/variables';

.header{
    width:100%;
    min-width: 320px;
    height: 104px;
    padding:0 @normalPadding 0 0;
    margin:0;
    // border-bottom: 1px solid @shadowColor;
    // box-shadow: 0px 1px 20px @shadowColor;
    position: fixed;
    z-index: 99999;
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
        padding:0 0 0 @normalPadding;
        box-sizing: border-box;
        .headerSearch{
            width:100%;
            display: flex;
            justify-content: center;
        }
        .headerBody{
            // height: 40px;
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
                    &.active{
                        a{
                            color: @themeColor;
                        }
                    }
                    &:hover{
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
@media screen and (max-width: @minWidth) {
    .header{
        padding:0 @minPadding 0 0;
        .headerInner{
            padding:0 0 0 @minPadding;
            .headerBody{
                flex-direction: column;
                .logo{
                    width: 95px;
                    img{
                        height: 25px;
                    }
                }
                .menu {
                    .linkItem{
                        min-width: 30px;
                        padding: 0 5px;
                    }
                }
            }
        }
    }
}
</style>
