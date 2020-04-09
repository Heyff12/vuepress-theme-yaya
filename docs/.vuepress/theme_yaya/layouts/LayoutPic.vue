<template>
  <YaLineContainer>
    <template v-slot:header>
      <YaPageHeader />
    </template>
    <YaPicList />
  </YaLineContainer>
</template>
<script>
import YaLineContainer from '../components/YaLineContainer'
import YaPageHeader from '../components/YaPageHeader'
import YaPicList from '../components/YaPicList'
export default {
    name:'LayoutPic',
    components: {
      YaLineContainer,YaPicList,YaPageHeader
    }
}
</script>