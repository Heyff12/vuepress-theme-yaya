<template>
  <YaLineContainer>
    <template v-slot:header>
      <YaPageHeader 
        :showSearch="false"
        :showBack="true"
      />
    </template>
    <section class="postDetail">
      <section class="postDetailBody">
        <h3 class="title">{{$page.title}}</h3>
        <section class="note cleancloud_visitors" :id="$page.path">
          <span class="noteItem"><i class="iconfont iconriqi"></i>{{$page.lastUpdated}}</span>
          <span class="noteItem"><i class="iconfont iconbook "></i><i class="normal leancloud-visitors-count"></i></span>
          <div class="tags">
            <router-link v-for="tag in $frontmatter.tags" :to="`/tags/${tag}`" :key="tag">
              <i class="iconfont icontag"></i>{{tag}}
            </router-link>
          </div>
        </section>
        <section class="markdownBody">  
          <Content/>
        </section>
      </section>
      <section class="postDetailNav">
        <section :class="['pageMenu',{'noFixed':!isNavFixed}]">
          <ul>
            <li v-for="(menu,index) in $page.headers" :key="index" :class="setNavClass(menu.level)">
              <a :href="'#' + menu.slug">
                {{menu.title}}
              </a>
            </li>
          </ul>
        </section>
      </section>
    </section>
    <section class="postComment" ref="comment">
      <YaComment/>
    </section>
  </YaLineContainer>
</template>

<script>
import YaPageHeader from '@theme/components/YaPageHeader'
import YaLineContainer from '@theme/components/YaLineContainer'
import YaComment from '@theme/components/YaComment'
const windowHeight = window.innerHeight

export default {
    name:'Post',
    components: {
      YaLineContainer,YaComment,YaPageHeader
    },
    data(){
      return {
        firstHeadersLevel: 1,
        commentDomTop: 0,
        isNavFixed: true
      }
    },
    mounted () {
      console.log(this.$page)
      console.log(this.$frontmatter)
      this.firstHeadersLevel = this.$page.headers[0].level
      window.addEventListener('scroll', this.handleScroll);
      const commentDom = this.$refs.comment
      this.commentDomTop = commentDom.offsetTop
    },
    methods: {
      setNavClass(level){
        return 'nav' + (level - this.firstHeadersLevel + 1)
      },
      handleScroll(e){
        const top = e.path[1].scrollY
        if(top + windowHeight>=this.commentDomTop - 30){
          this.isNavFixed = false
        }else {
          this.isNavFixed = true
        }
      }
    }
}
</script>

<style lang="less" scoped>
@import '../styles/variables';

.postDetail{
  width:100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .title {
    font-size: 30px;
    text-align: center;
    margin: 15px auto;
    color: @themeColor;
  }
  .note{
    width:100%;
    border-top: 1px dashed @borderColor;
    border-bottom: 1px dashed @borderColor;
    height: 40px;
    line-height: 40px;
    margin: 15px auto 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    i{
      padding-right: 5px;
    }
    .noteItem{
      margin:0 10px;
      display: inline-flex;
    }
    .tags{
      margin:0 10px;
      a{
        padding-right: 5px;
      }
    }
  }
  .postDetailBody{
    flex:1;
  }
  .postDetailNav{
    position: relative;
    width: 250px;
    margin:0 -40px 30px 40px;
    .pageMenu{
      width:100%;
      position: fixed;
      margin-top: 0;
      font-size: 16px;
      max-height: 320px;
      overflow-y: auto;
      &.noFixed{
        position: absolute;
        bottom: 0;
      }
      li{
        width:100%;
        &.nav1{
          font-size: 18px;
          line-height: 30px;
        }
        &.nav2{
          font-size: 16px;
          line-height: 28px;
        }
        &.nav3{
          font-size: 14px;
          line-height: 24px;
        }
        &.nav4{
          font-size: 12px;
          line-height: 20px;
        }
      }
    }
  }
}

@media screen and (max-width: @midBoobWidth) {
  .postDetail{
    .postDetailNav{
      display: none;
    }
  }
}

@media screen and (max-width: @minWidth) {
  .postDetail{
    .title{
      font-size: 18px;
      margin:8px 0;
    }
    .note {
      flex-direction: column;
      .noteItem{
        margin:0 10px;
        &:nth-child(2){
          display: none;
        }
        i.normal{
          font-style: normal;
        }
      }
      .tags{
        display:none;
      }
    }
  }
}
</style>