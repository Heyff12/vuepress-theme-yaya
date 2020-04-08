<template>
  <YaLineContainer>
    <template v-slot:header>
      <YaPageHeader 
        :dynamicData="[]"
        :showStatic="true"
        current="Index"
      />
    </template>
    <section class="about">
      <ul class="pageListItem">
        <li v-for="(page,index) in allList" :key="index">
          <YaTextContainer :page="page"/>
        </li>
      </ul>
    </section>
  </YaLineContainer>
</template>

<script>
import YaPageHeader from '../components/YaPageHeader'
import YaLineContainer from '../components/YaLineContainer'
import YaTextContainer from '../components/YaTextContainer.vue'

export default {
  name: 'Index',
  components: {
    YaLineContainer,YaPageHeader,YaTextContainer
  },
  data(){
    return {
      allList:[]
    }
  },
  mounted () {
    const lists = this.$site.pages
    const rightLists = lists.filter(item=>{
      const reg = /(.html)$/
      return reg.test(item.regularPath)
    })
    this.allList = rightLists
  }
}
</script>

<style lang="less" scoped>
@import '../styles/variables';
@import '../styles/pageTitleList';

.listHeader{
  width:100%;
  padding:15px 0;
  color:white;
  ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 500;
    li {
      margin-right: 10px;
      box-sizing: border-box;
      position:relative;
      padding-right: 15px;
      &:after{
        content: "/";
        position: absolute;
        right: 0;
      }
      &:last-child{
        padding-right: 0;
        &:after{
          display:none;
        }
      }
      &.current{
        border-bottom: 3px solid white;
      }
    }
    a {
      color:white;
    }
  }
}

.about{
  padding:20px 0;
    display: flex;
    flex-direction: column;
    p{
      text-indent: 2em;
      margin:10px 0;
    }
}
</style>
