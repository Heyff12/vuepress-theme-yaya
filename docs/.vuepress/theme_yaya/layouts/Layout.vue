<template>
  <YaLineContainer>
    <template v-slot:header>
      <YaPageHeader />
    </template>
    <YaTitleList />
  </YaLineContainer>
</template>
<script>
import YaPageHeader from '../components/YaPageHeader'
import YaLineContainer from '../components/YaLineContainer'
import YaTitleList from '../components/YaTitleList'
export default {
    name:'Layout',
    components: {
      YaLineContainer,YaTitleList,YaPageHeader
    }
}
</script>