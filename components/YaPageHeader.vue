<template>
  <section class="pageHeader">  
    <section :class="['pageHeaderLeft',{'show':dynamicData.length || current || showBack}]">
      <p  v-if="showBack" class="back" @click="$router.go(-1)">
        <i class="iconfont iconfanhui"></i>返回
      </p>
      <ul>
        <li v-for="(item,index) in dynamicData" :key="index">
          <router-link :to="item.url">{{item.name}}</router-link>
        </li>
        <template v-if="current">
          <li class="current">{{current}}</li>
        </template>
      </ul>
    </section>
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
        default: function () {
          return []
        }
      },
      showSearch: {
        type: Boolean,
        required: false,
        default: true
      },
      showBack: {
        type: Boolean,
        required: false,
        default: false
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
  .pageHeaderLeft{
    padding:0;
    display: flex;
    flex-direction: row;
    align-items: center;
    &.show{
      padding:15px 0;
    }
    .back{
      font-weight: 500;
      padding-right: 15px;
      cursor: pointer;
      i {
        font-size: 20px;
      }
    }
  }
  ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 500;
    padding:0;
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
