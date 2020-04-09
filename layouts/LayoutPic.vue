<template>
  <YaLineContainer>
    <template v-slot:header>
      <YaPageHeader />
    </template>
    <YaPicList />
  </YaLineContainer>
</template>
<script>
import YaLineContainer from '@theme/components/YaLineContainer'
import YaPageHeader from '@theme/components/YaPageHeader'
import YaPicList from '@theme/components/YaPicList'
export default {
    name:'LayoutPic',
    components: {
      YaLineContainer,YaPicList,YaPageHeader
    }
}
</script>