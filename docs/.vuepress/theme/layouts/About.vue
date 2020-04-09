<template>
  <YaLineContainer>
    <template v-slot:header>
      <YaPageHeader 
        current="关于我"
        :showSearch="false"
      />
    </template>
    <section class="about">
      <p>
        公元纪年--1988年1月30号，在家人的喜悦和期待中来到了地球^_^，开启了我的人生，书写着我的故事……小眼睛、小嘴巴，
        还有那被上帝珍藏了一半的”半、截、眉“O(∩_∩)O~
      </p>
      <p>
        记得小时候的翻老房子、爬树、翻土丘、趟水塘、跳秸秆堆……记得小时候的橡皮筋、石子、过山羊、纸面包……记得小时候的大大泡泡糖、
        1角钱10个的硬糖、过家家、5角钱一对的耳环……
      </p>
      <p>
        时光如梭，就到了选择学校专业的十字路口。怕不足一本的成绩无法进入北京服装学院，放弃了我的最爱‘服装设计’；
        鉴于叔叔说南方的哪些学校时间短，质量薄弱，放弃了‘新闻传媒’；屡屡舍弃最爱，索性选择了一窍不通还充满挑战的计算机专业——软件工程！
        以583的凄凄惨惨分数进入四川理工学院，与一群智力精英为伍，开启了一个女屌丝的进化史……
      </p>
      <p>
        回想2011年的自荐信，现在读来，觉得自己挺傻挺天真！——“我的经验或许让您犹豫不决，但请相信我的干劲与努力将弥补这暂时的不足，
        也许我不是最好的，但我绝对是最努力的。我相信：用心一定能赢得精彩！ ”！蓝海基业，一个奉献了四年青春的地方，
        一个陪我度过了又一个社会大学的地方，我想，我不负你，也对得起那句稚嫩的豪语！
      </p>
      
    </section>
  </YaLineContainer>
</template>

<script>
import YaPageHeader from '../components/YaPageHeader'
import YaLineContainer from '../components/YaLineContainer'
export default {
  name: 'About',
  components: {
    YaLineContainer,YaPageHeader
  },
}
</script>

<style lang="less" scoped>
@import '../styles/variables';

.listHeader{
  width:100%;
  padding:15px 0;
  color:white;
  ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 500;
    li {
      margin-right: 10px;
      box-sizing: border-box;
      position:relative;
      padding-right: 15px;
      &:after{
        content: "/";
        position: absolute;
        right: 0;
      }
      &:last-child{
        padding-right: 0;
        &:after{
          display:none;
        }
      }
      &.current{
        border-bottom: 3px solid white;
      }
    }
    a {
      color:white;
    }
  }
}

.about{
  padding:20px 0;
    display: flex;
    flex-direction: column;
    p{
      text-indent: 2em;
      margin:10px 0;
    }
}
</style>
