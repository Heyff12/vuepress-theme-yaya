<template>
  <section class="reward_out">
    <section class="reward_in">赞</section>
    <section class="reward_pic">
      <dl>
        <dt>
          <img :src="$withBase($site.themeConfig.alipay)" alt="支付宝打赏" />
        </dt>
        <dd>支付宝打赏</dd>
      </dl>
      <dl>
        <dt>
          <img :src="$withBase($site.themeConfig.wechat)" alt="微信打赏" />
        </dt>
        <dd>微信打赏</dd>
      </dl>
    </section>
  </section>
</template>

<script>
export default {
  name: "YaReward",
};
</script>

<style lang="less" scoped>
@zan_width: 120px;
@pay_width: 150px;

.reward_out {
  width: 100%;
  margin: 20px auto;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .reward_in {
    width: @zan_width;
    height: @zan_width;
    border-radius: 100%;
    background-color: #fec22b;
    color: white;
    font-size: 38px;
    font-weight: bold;
    line-height: @zan_width;
    text-align: center;
    cursor: pointer;
  }
  .reward_pic {
    display: none;
    flex-direction: row;
    dl {
      text-align: center;
      padding: 10px;
      dt {
        width: @pay_width;
        height: @pay_width;
        overflow: hidden;
        img {
          width: 100%;
          height: auto;
        }
      }
      dd {
        height: 30px;
        line-height: 30px;
      }
    }
  }
  &:hover {
    .reward_pic {
      display: flex;
    }
  }
}
</style>
