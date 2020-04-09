<template>
    <section class="picContainer">
      <section class="left">
        <YaTextContainer :page="page" />
      </section>
      <section class="right">
        <div class="img">
          <router-link :to="page.path">
            <img :src="page.frontmatter.imgBg || $site.themeConfig.bookListBg" alt="Yaya's blog">
          </router-link>
        </div>
      </section>
    </section>
</template>

<script>
import YaTextContainer from './YaTextContainer.vue'
export default {
    name: 'YaPicContainer',
    components: {
      YaTextContainer
    },
    props: ['page'],
}
</script>

<style lang="less" scoped>
@import '../styles/variables';
.picContainer{
  width:100%;
      display: flex;
      flex-direction: row;
  .left{
    flex:1;
    padding:20px;
    box-sizing: border-box;
  }
  .right {
    width:280px;
    max-height:220px;
    .img{
      width: 100%;
      height: 100%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}

@media screen and (max-width: @minWidth) {
  .picContainer{
    flex-direction: column;
    .left{
      padding:0;
      order:2;
      background-color: rgba(255, 255, 255, .8);
    }
    .right{
      width:100%;
      max-height:240px;
      order:1;
    }
  }
}
</style>
