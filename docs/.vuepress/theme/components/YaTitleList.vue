<template>
    <section class="titleListContainer">
      <ul class="pageListItem">
        <li v-for="(page,index) in $pagination.pages" :key="index">
          <h4>
            <i class="iconfont iconbiaoti"></i>
            <router-link :to="page.path">{{ page.title }}</router-link>
          </h4>
          <!-- <p v-html="page.excerpt"></p> -->
          <p class="summary">
            <router-link :to="page.path">{{page.frontmatter.summary}}</router-link>             
          </p>
          <footer>
            <span class="date"><i class="iconfont iconriqi"></i>{{page.lastUpdated}}</span>
            <div class="tags">
              <a v-for="tag in page.frontmatter.tags" :href="`/tags/${tag}`">
                <i class="iconfont icontag"></i>{{tag}}
              </a>
            </div>
          </footer>
        </li>
      </ul>
      <Pagination />
      <!-- <div id="pagination">
        <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
        <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
      </div> -->
    </section>
</template>

<script>
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'
export default {
    name: 'YaTitleList',
    components: {
      Pagination
    },
    mounted(){
        console.log(this.$site)
        console.log(this.$page)
        console.log(this.$frontmatter)
        console.log(this.$frontmatterKey)
        // console.log(this.$frontmatterKey.list)
        console.log(this.$pagination)
        console.log(this.$pagination.pages)
    }
}
</script>

<style lang="less" scoped>
@import '../styles/variables';

.titleListContainer{
  width: 100%;
  .pageListItem{
  width:100%;
  li{
    width:100%;
    background-color: white;
    border-bottom:1px solid @borderColor;
    border-radius: 5px;
    padding:20px;
    box-sizing: border-box;
    margin:20px auto;
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
      margin-bottom: 10px;
      color:@grey;
      a {
        color:@grey;
        &:hover{
          color:@grey;
        }
      }
    }
    footer {
      display: flex;
      flex-direction: row;
      color:@grey;
      justify-content: space-between;
      i{
        padding-right: 5px;
      }
      .tags{
        a{
          // color:@orange;
          padding-left:10px;
        }
      }
    }
    &:hover{
      box-shadow: 0px 1px 10px @shadowColor;
      h4 {
        i {
          animation: rotate .5s infinite linear;
          -webkit-animation: rotate 1s infinite linear ;
          -webkit-transform-origin: center center;
          -ms-transform-origin: center center;
          transform-origin: center center;
        }
      }
    }
  }
}
}

@keyframes rotate
{
  from {
    transform:rotate(0deg)
  }
  to {
    transform:rotate(-360deg)
  }
}
</style>
