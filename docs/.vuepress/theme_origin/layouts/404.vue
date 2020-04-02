<template>
  <section class="error">
    <h1 class="error-code">404</h1>
    <p class="error-description">Page not found</p>
    <router-link :to="$localePath" class="error-home">home</router-link>
  </section>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="less" scoped>
.error{
    display: flex;
    flex-direction: column;
    align-items: center;
    .error-code{
        font-size: 12vw;
        color: #d6dadc;
    }
    .error-description {
        border-left: 8px solid #d6dadc;
        padding-left: 20px;
        font-size: 2rem;
        color: #2c3e50;
        font-weight: 400;
        opacity: 0.5;
        transition: color 0.5s ease-in-out;
    }
    .error-home {
        display: inline-block;
        margin: 2rem 0 4rem;
        font-size: 2rem;
        color: #3eaf7c;
        transition: color 0.5s ease-in-out;
    }
}
</style>
