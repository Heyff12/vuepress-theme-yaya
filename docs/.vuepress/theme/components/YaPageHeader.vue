<template>
  <section class="pageHeader">  
    <ul :class="{'show':dynamicData.length || current}">
      <li v-for="(item,index) in dynamicData" :key="index">
        <a :href="item.url">{{item.name}}</a>
      </li>
      <template v-if="current">
        <li class="current">{{current}}</li>
      </template>
    </ul>
    <section class="headerSearch" v-if="showSearch">
      <SearchBox />
    </section>
  </section>
</template>

<script>
import SearchBox from '@SearchBox'
export default {
    name: 'YaPageHeader',
    components: {
        SearchBox
    },
    props:{
      current: {
        type: String,
        required: false,
        default: ''
      },
      dynamicData: {
        type: Array,
        required: false,
        default: []
      },
      showSearch: {
        type: Boolean,
        required: false,
        default: true
      }
    }
}
</script>

<style lang="less" scoped>
@import '../styles/variables';

.pageHeader{
  width:100%;
  padding:0 0;
  color:white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 500;
    padding:0;
    &.show{
      padding:15px 0;
    }
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
  .headerSearch{
    padding:15px 0;
  }
}
@media screen and (max-width: @minWidth) {
    .pageHeader{
        .headerSearch{
          display: none;
        }
    }
}
</style>
