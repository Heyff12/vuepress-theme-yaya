<template>
  <section class="rewardOut">
    <section class="rewardIn">赞</section>
    <section class="rewardPic">
      <dl>
        <dt>
          <img
            :src="setCustomPathPrefix($site.themeConfig.alipay)"
            alt="支付宝打赏"
          />
        </dt>
        <dd>支付宝打赏</dd>
      </dl>
      <dl>
        <dt>
          <img
            :src="setCustomPathPrefix($site.themeConfig.wechat)"
            alt="微信打赏"
          />
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

.rewardOut {
  width: 100%;
  margin: 20px auto;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .rewardIn {
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
  .rewardPic {
    display: none;
    cursor: pointer;
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
    .rewardPic {
      display: flex;
    }
  }
}
</style>
