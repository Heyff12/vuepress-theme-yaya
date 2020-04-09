<template>
  <YaLineContainer>
    <template v-slot:header>
      <YaPageHeader 
        :dynamicData="[{name:'All Tags',url:'/tags/'}]"
        :current="$frontmatter.title.replace(' Tags','')"
      />
    </template>
    <YaTitleList />
  </YaLineContainer>
</template>

<script>
import YaLineContainer from '@theme/components/YaLineContainer'
import YaTitleList from '@theme/components/YaTitleList'
import YaPageHeader from '@theme/components/YaPageHeader'

export default {
    name:'FrontmatterPagination',
    components: {
        YaLineContainer,YaTitleList,YaPageHeader
    },
}
</script>