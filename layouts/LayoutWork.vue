<template>
  <YaLineContainer>
    <template v-slot:header>
      <YaPageHeader />
    </template>
    <YaWorkList />
  </YaLineContainer>
</template>
<script>
import YaLineContainer from '@theme/components/YaLineContainer'
import YaPageHeader from '@theme/components/YaPageHeader'
import YaWorkList from '@theme/components/YaWorkList'
export default {
    name:'LayoutWork',
    components: {
      YaLineContainer,YaWorkList,YaPageHeader
    }
}
</script>