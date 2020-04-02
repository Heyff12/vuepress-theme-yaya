<template>
  <YaLineContainer>
    <YaBookList />
  </YaLineContainer>
</template>
<script>
import YaLineContainer from '../components/YaLineContainer'
import YaBookList from '../components/YaBookList'
export default {
    name:'LayoutBook',
    components: {
      YaLineContainer,YaBookList
    }
}
</script>