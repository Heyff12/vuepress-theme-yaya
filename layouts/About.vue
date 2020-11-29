<template>
  <YaLineContainer>
    <template v-slot:header>
      <YaPageHeader 
        current="关于我"
        :showSearch="false"
      />
    </template>
    <section class="markdownBody">  
      <Content/>
    </section>
  </YaLineContainer>
</template>

<script>
import YaPageHeader from '@theme/components/YaPageHeader'
import YaLineContainer from '@theme/components/YaLineContainer'
export default {
  name: 'About',
  components: {
    YaLineContainer,YaPageHeader
  },
}
</script>

<style lang="less" scoped>
@import '../styles/variables';

.about{
  padding:20px 0;
    display: flex;
    flex-direction: column;
    p{
      text-indent: 2em;
      margin:10px 0;
    }
}
</style>
