<template>
  <YaLineContainer>
    <template v-slot:header>
      <YaPageHeader 
        :dynamicData="[{name:'All Tags',url:'/tags/'}]"
        :showStatic="true"
        :current="$frontmatter.title.replace(' Tags','')"
      />
    </template>
    <YaTitleList />
  </YaLineContainer>
</template>

<script>
import YaLineContainer from '../components/YaLineContainer'
import YaTitleList from '../components/YaTitleList'
import YaPageHeader from '../components/YaPageHeader'

export default {
    name:'FrontmatterPagination',
    components: {
        YaLineContainer,YaTitleList,YaPageHeader
    },
}
</script>