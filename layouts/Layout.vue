<template>
  <YaLineContainer>
    <template v-slot:header>
      <YaPageHeader />
    </template>
    <YaTitleList />
  </YaLineContainer>
</template>
<script>
import YaPageHeader from '@theme/components/YaPageHeader'
import YaLineContainer from '@theme/components/YaLineContainer'
import YaTitleList from '@theme/components/YaTitleList'
export default {
    name:'Layout',
    components: {
      YaLineContainer,YaTitleList,YaPageHeader
    }
}
</script>