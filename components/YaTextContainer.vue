<template>
    <section class="textContainer">
      <h4>
        <i class="iconfont iconbiaoti"></i>
        <router-link :to="page.path">{{ page.title }}</router-link>
      </h4>
      <!-- <p v-html="page.excerpt"></p> -->
      <p class="summary">
        <router-link :to="page.path">{{page.frontmatter.summary}}</router-link>             
      </p>
      <footer>
        <span class="date"><i class="iconfont iconriqi"></i>{{page.frontmatter.date || page.lastUpdated}}</span>
        <div class="tags">
          <router-link v-for="tag in page.frontmatter.tags" :to="`/tags/${tag}`" :key="tag">
            <i class="iconfont icontag"></i>{{tag}}
          </router-link>
        </div>
      </footer>
    </section>
</template>

<script>
export default {
    name: 'YaTextContainer',
    props: ['page'],
    // mounted(){
    //     console.log(this.$page)
    //     console.log(this.$frontmatter)
    //     console.log(this.page)
    //     // console.log(this.$frontmatterKey)
    //     // // console.log(this.$frontmatterKey.list)
    //     // console.log(this.$pagination)
    //     // console.log(this.$pagination && this.$pagination.pages)
    // }
}
</script>

<style lang="less" scoped>
@import '../styles/variables';
.textContainer{
  padding:10px 20px;
  h4{
    margin-bottom: 15px;
    i{
      color:@themeColor;
      font-size: 20px;
      padding-right: 10px;
    }
    a{
      font-size: 18px;
    }
  }
  .summary{
    color:@grey;
    a {
      color:@grey;
      &:hover{
        color:@grey;
      }
    }
  }
  footer {
    margin-top:5px;
    display: flex;
    flex-direction: row;
    color:@grey;
    justify-content: space-between;
    i{
      padding-right: 5px;
    }
    .tags{
      a{
        padding-right:10px;
      }
    }
  }
}
@media screen and (max-width: @midWidth) {
  .textContainer{
    footer{
        flex-direction: column;
    }
  }
}
@media screen and (max-width: @minWidth) {
  .textContainer{
    padding:5px 10px;
    h4{
      margin-bottom: 6px;
      i{
        font-size: 14px;
      }
      a{
        font-size: 14px;
      }
    }
    footer{
        flex-direction: column;
    }
  }
}
</style>
