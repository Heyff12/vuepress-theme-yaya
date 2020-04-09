<template>
  <YaLineContainer>
    <template v-slot:header>
      <YaPageHeader 
        current="Index"
      />
    </template>
    <section class="index">
      <ul class="pagePicListItem">
        <li v-for="(page,index) in allList" :key="index">
          <YaPicContainer :page="page"/>
        </li>
      </ul>
    </section>
  </YaLineContainer>
</template>

<script>
import YaPageHeader from '../components/YaPageHeader'
import YaLineContainer from '../components/YaLineContainer'
import YaPicContainer from '../components/YaPicContainer.vue'

export default {
  name: 'Index',
  components: {
    YaLineContainer,YaPageHeader,YaPicContainer
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
@import '../styles/YaPicContainer';
@import '../styles/YaPicList';

.index{
  width:100%;
}
</style>
