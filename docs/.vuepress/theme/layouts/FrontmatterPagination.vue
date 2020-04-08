<template>
  <YaLineContainer>
    <template v-slot:header>
      <section class="listHeader">
        <ul>
          <li>
            <a href="/tags/">All Tags</a>
          </li>
          <li class="current">{{$frontmatter.title.replace(' Tags','')}}</li>
        </ul>
      </section>
    </template>
    <YaTitleList />
  </YaLineContainer>
</template>
<script>
import YaLineContainer from '../components/YaLineContainer'
import YaTitleList from '../components/YaTitleList'

export default {
    name:'FrontmatterPagination',
    components: {
        YaLineContainer,YaTitleList
    },
}
</script>

<style lang="less">
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
</style>