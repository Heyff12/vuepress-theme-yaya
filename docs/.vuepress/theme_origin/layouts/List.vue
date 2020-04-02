<template>
  <section class="pageList">
    <section class="categoryList">
      <ul>
        <li 
          @click="changeTag('all')" 
          :class="nowTag=='all'?'selectTag':''"  
        >
          全部
        </li>
        <li 
          v-for="tag in tagList"
          @click="changeTag(tag)" 
          :class="nowTag==tag?'selectTag':''"  
        >
          {{tag}}
        </li>
      </ul>
    </section> 
    <section class="pageBody">
      <section class="pageContent">
        <div 
          v-if="item&&item.frontmatter.layout!='List'" 
          class="pageContentItem" 
          @click="goArticle(item.path)"
          v-for="(item,index) in nowList"
          :key="index"
        >
            <div class="pageImg">
              <img class="catalog-icon" :src="item.frontmatter.img || $site.themeConfig.listBg"/>
            </div>
            <div class="pageTitle">
              {{item.title?item.title:'未命名'}}
            </div>
            <div class="pageFooter">
              <dl>
                <dt>Tag:</dt>
                <dd>{{item.tag}}</dd>
              </dl>
              <dl>
                <dt>Date:</dt>
                <dd>{{item.lastUpdated}}</dd>
              </dl>
            </div>
        </div>
      </section>
      <section class="pagenation">
        <div @click="choosePage(item-1)" 
          class="pageItem" 
          :class="{'active':pageId==item-1}"
          v-for="item in pageNum"
        >
            {{item}}
        </div>
      </section>
    </section>
  </section>
</template>

<script>
export default {
    name:'PageList',
    data() {
        return {
            catalogList: [], //所有页面
            tagList: [], //所有类别列表
            pageId: 1,
            pageNum: null,//分页，页数
            nowList: [], //当前页列表页面
            everyPageNumber: 10,//每页多少个
            nowTag: 'all',
        }
    },
    mounted() {
      console.log(this.$route)
        this.everyPageNumber = this.$site.themeConfig.pageNum?this.$site.themeConfig.pageNum:10;
        this.nowTag = this.$route.query.type?this.$route.query.type:'all';
        this.init(this.nowTag);
        this.choosePage(0);
        this.getTag();
    },
    methods: {
        changeTag(val) {
            this.nowTag=val;
            this.init(val);
            this.choosePage(0);
        },
        choosePage(num) {
            this.pageId = num;
            var startIndex = this.pageId * this.everyPageNumber;
            var endIndex = startIndex + this.everyPageNumber - 1;
            this.nowList = this.catalogList.filter((element, index) => {
                if (index >= startIndex && index <= endIndex) {
                    return element;
                }
            })
            console.log('---------------this.nowList-------------------------')
            console.log(this.nowList)
        },
        goArticle(link) {
            this.$router.push(link)
        },
        getTag() {
            var list = this.$site.pages;
            list.forEach(element => {
                var str = element.regularPath;
                var taglist = str.split('/').reverse();
                var l = decodeURIComponent(taglist[1]);
                if (l != '') {
                    this.tagList.push(l);
                }
            })
            this.tagList = new Set(this.tagList);
        },
        init(tagType) {
            //获得所有文章
            var length = 0;//记录长度
            var pages = this.$site.pages;
            console.log(pages)
            this.catalogList = pages.filter((element) => {
                // if (element.title != 'Home') {
                    var taglist = element.relativePath.split('/').reverse();
                    element.tag = decodeURIComponent(taglist[1]);
                    console.log(element)

                    if (tagType == 'all') {
                        length = length + 1;
                        return element;
                    } else {
                        if (tagType == element.tag) {
                            length = length + 1;
                            return element;
                        }
                    }
                // }
            })
            console.log(this.catalogList)
            this.pageNum = Math.ceil(length / this.everyPageNumber);
        }
    }
}
</script>
<style lang="less" scoped>
@import '../styles/variables.less';
.pageList{
    display: flex;
    flex-direction: column;
    width:1200px;
    margin:10px auto;
    .categoryList{
      width:100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      ul{
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: row;
        li{
          margin-right: 10px;
          &.selectTag{
            color: @themeColor;
          }
        }
      }
    }
    .pageBody{
      width:100%;
      .pageContent{
        width:100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        margin:20px 0;
        .pageContentItem{
          width:30%;
          margin:0 5% 15px 0;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          background:@bgColor;
          border-radius: 8px;
          overflow: hidden;
            box-shadow: 0 2px 6px @shadowColor;
          &:nth-child(3n){
            margin-right: 0;
          }
          .pageImg{
            width:100%;
            img{
              height: auto;
              width:100%;
            }
          }
          .pageTitle{
            width: 100%;
          }
          .pageFooter{
            width:100%;
            color:@grey;
            font-size: 12px;
            dl{
              width:100%;
              display: flex;
              flex-direction: row;
              dt{
                margin-right: 6px;
              }
            }
          }
        }
      }
      .pagenation {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .pageItem{
          width:50px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          cursor: pointer;
          &.active{
            color: @themeColor;
          }
        }
      }
    }
}
</style>