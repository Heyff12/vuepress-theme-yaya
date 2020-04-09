<template>
  <YaLineContainer>
    <template v-slot:header>
      <YaPageHeader />
    </template>
    <YaBookList />
  </YaLineContainer>
</template>
<script>
import YaLineContainer from '@theme/components/YaLineContainer'
import YaPageHeader from '@theme/components/YaPageHeader'
import YaBookList from '@theme/components/YaBookList'
export default {
    name:'LayoutBook',
    components: {
      YaLineContainer,YaBookList,YaPageHeader
    }
}
</script>