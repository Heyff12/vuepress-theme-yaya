<template>
    <section class="containerOuter">
      <section class="containerInner">
        <section class="bodyPadding color">
          <section class="containerHeader">
            <slot name="header"></slot>
          </section>
        </section>
        <section class="bodyPadding">
          <section class="containerBody">
            <slot></slot>
          </section>
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
    padding-top:15px;
    margin:10px 0;
    .bodyPadding{
      padding:0 @normalPadding 0 20px;
      &.color{
        background-color: @themeColor;
        // background: linear-gradient(270deg,#0083b0,#00b4db);
      }
    }
    .containerHeader{
      height: auto;
      width:100%;
    }
    .containerBody{
      box-sizing: border-box;
      width:100%;
      padding:25px 5%;
      box-sizing: border-box;
    }
  }
}
@media screen and (max-width: @minWidth) {
  .containerOuter{
    padding:0 0 0 @minPadding;
    .containerInner{
      .containerBody{
        padding:20px 0;
      }
    }
  }
}
</style>
