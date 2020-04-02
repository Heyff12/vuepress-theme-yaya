<template>
  <section class="pageList">
    <section class="pageListInner">
      <section class="pageListBody">
        <ul class="pageListItem">
          <li v-for="(page,index) in $pagination.pages" :key="index">
            <h4>
              <i class="iconfont iconbiaoti"></i><router-link class="page-link" :to="page.path">{{ page.title }}</router-link>
            </h4>
            <!-- <p v-html="page.excerpt"></p> -->
            <p class="summary">{{page.frontmatter.summary}}</p>
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
    </section>
  </section>
</template>
<script>
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'
export default {
    name:'Layout',
    data(){
      return {
        pageDetail:''
      }
    },
    components: {
      Pagination
    },
    computed: {
    },
    mounted(){
        console.log(this.$page)
        console.log(this.$frontmatter)
        console.log(this.$pagination)
        console.log(this.$pagination.pages)
    }
}
</script>
<style lang="less" scoped>
@import '../styles/variables';

.pageList{
  width: 100%;
  padding:0 0 0 10%;
  background-color: white;
  box-sizing: border-box;
  .pageListInner{
    width: 100%;
    border:3px solid @borderColorTheme;
    border-right:0;
    border-bottom:0;
    margin:10px 0;
    padding:20px 10% 20px 20px;
    box-sizing: border-box;
    .pageListBody{
      width:100%;
      padding:10px 10%;
      box-sizing: border-box;
    }
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
        }
        footer {
          display: flex;
          flex-direction: row;
          color:@grey;
          justify-content: space-between;
          i{
            padding-right: 5px;
          }
          .date{
          }
          .tags{
            a{
              // color:@orange;
              padding-left:10px;
            }
          }
        }
      }
    }
  }
}
</style>
