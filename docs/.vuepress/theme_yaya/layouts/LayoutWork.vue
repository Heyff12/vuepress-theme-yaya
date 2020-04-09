<template>
  <YaLineContainer>
    <template v-slot:header>
      <YaPageHeader />
    </template>
    <YaWorkList />
  </YaLineContainer>
</template>
<script>
import YaLineContainer from '../components/YaLineContainer'
import YaPageHeader from '../components/YaPageHeader'
import YaWorkList from '../components/YaWorkList'
export default {
    name:'LayoutWork',
    components: {
      YaLineContainer,YaWorkList,YaPageHeader
    }
}
</script>