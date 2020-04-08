<template>
  <section class="pageHeader">  
    <ul>
      <li v-for="(item,index) in dynamicData" :key="index">
        <a :href="item.url">{{item.name}}</a>
      </li>
      <template v-if="showStatic">
        <li class="current">{{current}}</li>
      </template>
    </ul>
  </section>
</template>

<script>
export default {
    name: 'YaPageHeader',
    props:{
      showStatic: Boolean,
      current: String,
      dynamicData: Array,
    }
}
</script>

<style lang="less" scoped>
@import '../styles/variables';

.pageHeader{
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
</style>
