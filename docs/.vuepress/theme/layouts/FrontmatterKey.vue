<template>
  <YaLineContainer>
    <ul class="tagsList">
      <li v-for="tag in $frontmatterKey.list">
        <router-link :to="tag.path">
          <span class="name">{{ tag.name }}</span>
          <span class="line"></span>
          <span class="count">{{ tag.pages.length }}</span>         
        </router-link>
      </li>
    </ul>
  </YaLineContainer>
</template>

<script>

import YaLineContainer from '../components/YaLineContainer'
export default {
    name:'FrontmatterKey',
    components: {
      YaLineContainer
    },
    computed: {
    },
    mounted(){
        console.log(this.$site)
        console.log(this.$page)
        console.log(this.$frontmatter)
        console.log(this.$frontmatterKey)
        console.log(this.$frontmatterKey.list)
    }
}
</script>

<style lang="less" scoped>
@import '../styles/variables';
.tagsList{
  width:100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  li{
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: @minixColor1;
    border-radius: 3px;
    margin: 15px;
    overflow: hidden;
    padding:0 20px;
    cursor: pointer;
    &:nth-child(2n){
      background-color: @minixColor2;
    }
    &:nth-child(3n){
      background-color: @minixColor3;
    }
    &:nth-child(4n){
      background-color: @minixColor4;
    }
    &:nth-child(5n){
      background-color: @minixColor5;
    }
    &:nth-child(6n){
      background-color: @minixColor6;
    }
    &:nth-child(7n){
      background-color: @minixColor7;
    }
    &:nth-child(8n){
      background-color: @minixColor8;
    }
    &:nth-child(9n){
      background-color: @minixColor9;
    }
    a {
      display: flex;
      flex-direction: row;
      min-width: 100px;
      justify-content: space-between;
      color:white;
      .name{
        padding-right: 10px;
      }
      .count{
        padding-left:10px;
      }
      .line{
        width:2px;
        background-color: white;
        height: 70px;
        transform:rotate(45deg) translate(-5px,-15px);
        transform-origin: center;
        margin:0 10px;
      }
      &:hover{
        color:white;
        transition: all .5s;
        transform:scale(1.1);
      }
    }
  }
}
</style>