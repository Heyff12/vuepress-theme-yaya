<template>
  <YaLineContainer>
    <YaWorkList />
  </YaLineContainer>
</template>
<script>
import YaLineContainer from '../components/YaLineContainer'
import YaWorkList from '../components/YaWorkList'
export default {
    name:'LayoutWork',
    components: {
      YaLineContainer,YaWorkList
    }
}
</script>