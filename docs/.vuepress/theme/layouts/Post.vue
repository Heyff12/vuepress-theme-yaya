<template>
  <YaLineContainer>
    <section class="postDetail">
      <h3 class="title">{{$page.title}}</h3>
      <section class="note">
        <span class="noteItem"><i class="iconfont iconriqi"></i>{{$page.lastUpdated}}</span>
        <span class="noteItem"><i class="iconfont iconbook"></i>{{$page.lastUpdated}}</span>
        <div class="tags">
          <a v-for="tag in $frontmatter.tags" :href="`/tags/${tag}`">
            <i class="iconfont icontag"></i>{{tag}}
          </a>
        </div>
      </section>
      <section class="markdownBody">  
        <Content/>
      </section>
    </section>
    <YaComment/>
  </YaLineContainer>
</template>

<script>
import YaLineContainer from '../components/YaLineContainer'
import YaComment from '../components/YaComment'
export default {
    name:'Post',
    components: {
      YaLineContainer,YaComment
    },
    mounted () {
      console.log(this.$page)
      console.log(this.$frontmatter)
    }
}
</script>

<style lang="less" scoped>
@import '../styles/variables';

.postDetail{
  width:100%;
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
    }
    .tags{
      margin:0 10px;
      a{
        padding-right: 5px;
      }
    }
  }
}

</style>