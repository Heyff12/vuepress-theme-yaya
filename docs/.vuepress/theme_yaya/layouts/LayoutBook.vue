<template>
  <YaLineContainer>
    <template v-slot:header>
      <YaPageHeader />
    </template>
    <YaBookList />
  </YaLineContainer>
</template>
<script>
import YaLineContainer from '../components/YaLineContainer'
import YaPageHeader from '../components/YaPageHeader'
import YaBookList from '../components/YaBookList'
export default {
    name:'LayoutBook',
    components: {
      YaLineContainer,YaBookList,YaPageHeader
    }
}
</script>