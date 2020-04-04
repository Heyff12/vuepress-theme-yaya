<template>
  <YaLineContainer>
    <h3>标签：{{$frontmatter.title.replace(' Tags','')}}</h3>
    <YaTitleList />
  </YaLineContainer>
</template>
<script>
import YaLineContainer from '../components/YaLineContainer'
import YaTitleList from '../components/YaTitleList'

export default {
    name:'FrontmatterPagination',
    components: {
        YaLineContainer,YaTitleList
    },
}
</script>