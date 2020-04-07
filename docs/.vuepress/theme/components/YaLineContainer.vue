<template>
    <section class="containerOuter">
    <section class="containerInner">
      <section class="containerBody">
          <slot></slot>
      </section>
    </section>
    </section>
</template>

<script>
export default {
    name: 'YaLineContainer'
}
</script>

<style lang="less" scoped>
@import '../styles/variables';

.containerOuter{
  width: 100%;
  padding:0 0 0 @normalPadding;
  background-color: white;
  box-sizing: border-box;
  .containerInner{
    width: 100%;
    border:3px solid @borderColorTheme;
    border-right:0;
    border-top:0;
    margin:10px 0;
    padding:20px @normalPadding 20px 20px;
    box-sizing: border-box;
    .containerBody{
      width:100%;
      padding:10px @normalPadding;
      box-sizing: border-box;
    }
  }
}
@media screen and (max-width: @minWidth) {
  .containerOuter{
    padding:0 0 0 @minPadding;
    .containerInner{
      padding:10px @minPadding 10px 20px;
      .containerBody{
        padding:10px 0;
      }
    }
  }
}
</style>
