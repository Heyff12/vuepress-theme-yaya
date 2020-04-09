<template>
  <YaLineContainer>
    <section class="error">
      <h1 class="error-code">404</h1>
      <p class="error-description">Page not found</p>
      <router-link :to="$localePath" class="error-home">home</router-link>
    </section>
  </YaLineContainer>
</template>

<script>
import YaLineContainer from '../components/YaLineContainer'
export default {
  name: 'NotFound',
  components: {
    YaLineContainer
  },
}
</script>

<style lang="less" scoped>
@import '../styles/variables';

.error{
    display: flex;
    flex-direction: column;
    align-items: center;
    .error-code{
        font-size: 12vw;
        color: @greyColor;
    }
    .error-description {
        border-left: 8px solid @greyColor;
        padding-left: 20px;
        font-size: 2rem;
        color: @greyDarkColor;
        font-weight: 400;
        opacity: 0.5;
        transition: color 0.5s ease-in-out;
    }
    .error-home {
        display: inline-block;
        margin: 2rem 0 4rem;
        font-size: 2rem;
        color: @themeColor;
        transition: color 0.5s ease-in-out;
    }
}
</style>
