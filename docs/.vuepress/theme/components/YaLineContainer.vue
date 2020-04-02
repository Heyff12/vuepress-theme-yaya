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
  padding:0 0 0 10%;
  background-color: white;
  box-sizing: border-box;
  .containerInner{
    width: 100%;
    border:3px solid @borderColorTheme;
    border-right:0;
    border-top:0;
    margin:10px 0;
    padding:20px 10% 20px 20px;
    box-sizing: border-box;
    .containerBody{
      width:100%;
      padding:10px 10%;
      box-sizing: border-box;
    }
  }
}

</style>
