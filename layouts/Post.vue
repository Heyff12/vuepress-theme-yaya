<template>
  <YaLineContainer>
    <template v-slot:header>
      <YaPageHeader :showSearch="false" :showBack="true" />
    </template>
    <section class="postDetail">
      <section class="postDetailBody">
        <h3 class="title">{{ $page.title }}</h3>
        <section class="note">
          <span class="noteItem"
            ><i class="iconfont iconriqi"></i
            >{{ $page.frontmatter.date || $page.lastUpdated }}</span
          >
          <span
            :id="$page.path"
            :data-flag-title="$page.title"
            class="leancloud_visitors noteItem"
            v-if="$site.themeConfig.valine"
          >
            <i class="iconfont iconbook "></i>
            <i class="leancloud-visitors-count normal">loading</i>
          </span>
          <div class="tags">
            <router-link
              v-for="tag in $frontmatter.tags"
              :to="`/tags/${tag}`"
              :key="tag"
            >
              <i class="iconfont icontag"></i>{{ tag }}
            </router-link>
          </div>
        </section>
        <section class="markdownBody">
          <Content />
        </section>
      </section>
      <section class="postDetailNav" v-show="isShowNav">
        <section :class="['pageMenu', { noFixed: !isNavFixed }]">
          <ul>
            <li
              v-for="(menu, index) in $page.headers"
              :key="index"
              :class="setNavClass(menu.level)"
            >
              <a :href="'#' + menu.slug">
                {{ menu.title }}
              </a>
            </li>
          </ul>
        </section>
      </section>
    </section>
    <YaReward />
    <section class="postComment" ref="comment">
      <YaComment />
    </section>
  </YaLineContainer>
</template>

<script>
import YaPageHeader from "@theme/components/YaPageHeader";
import YaLineContainer from "@theme/components/YaLineContainer";
import YaComment from "@theme/components/YaComment";
import YaReward from "@theme/components/YaReward";

export default {
  name: "Post",
  components: {
    YaLineContainer,
    YaComment,
    YaPageHeader,
    YaReward,
  },
  data() {
    return {
      firstHeadersLevel: 1,
      commentDomTop: 0,
      isNavFixed: true,
      isShowNav: false,
      windowHeight: 0,
    };
  },
  mounted() {
    console.log(this.$page);
    console.log(this.$frontmatter);
    const { headers } = this.$page;
    if (headers && headers.length > 4) {
      this.isShowNav = true;
      this.firstHeadersLevel = this.$page.headers[0].level;
    }
    window.addEventListener("scroll", this.handleScroll);
    const commentDom = this.$refs.comment;
    this.commentDomTop = commentDom.offsetTop;
    this.windowHeight = window.innerHeight;
  },
  methods: {
    setNavClass(level) {
      return "nav" + (level - this.firstHeadersLevel + 1);
    },
    handleScroll(e) {
      const top = e.path[1].scrollY;
      if (top + this.windowHeight >= this.commentDomTop) {
        this.isNavFixed = false;
      } else {
        this.isNavFixed = true;
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "../styles/variables";

.postDetail {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 45px;
  .title {
    font-size: 30px;
    text-align: center;
    margin: 15px auto;
    color: @themeColor;
  }
  .note {
    width: 100%;
    border-top: 1px dashed @borderColor;
    border-bottom: 1px dashed @borderColor;
    min-height: 40px;
    padding: 5px 0;
    line-height: 30px;
    margin: 15px auto 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    i {
      padding-right: 5px;
    }
    .noteItem {
      margin: 0 10px;
      display: inline-flex;
    }
    .tags {
      margin: 0 10px;
      a {
        padding-right: 5px;
      }
    }
  }
  .postDetailBody {
    flex: 1;
    overflow-x: auto;
  }
  .postDetailNav {
    position: relative;
    width: 250px;
    margin: 0 -40px 0 20px;
    border-left: 1px dashed @borderColor;
    padding-left: 20px;
    .pageMenu {
      width: 250px;
      position: fixed;
      margin-top: 0;
      font-size: 16px;
      max-height: 320px;
      overflow-y: auto;
      &.noFixed {
        position: absolute;
        bottom: 0;
      }
      li {
        width: 100%;
        &.nav1 {
          font-size: 18px;
          line-height: 30px;
        }
        &.nav2 {
          font-size: 16px;
          line-height: 28px;
        }
        &.nav3 {
          font-size: 14px;
          line-height: 24px;
        }
        &.nav4 {
          font-size: 12px;
          line-height: 20px;
        }
        a {
          font-weight: normal;
        }
      }
    }
  }
}

@media screen and (max-width: @midBoobWidth) {
  .postDetail {
    .postDetailNav {
      display: none;
    }
  }
}

@media screen and (max-width: @minWidth) {
  .postDetail {
    .title {
      font-size: 18px;
      margin: 8px 0;
    }
    .note {
      flex-direction: column;
      .noteItem {
        margin: 0 10px;
        &:nth-child(2) {
          display: none;
        }
        i.normal {
          font-style: normal;
        }
      }
      .tags {
        // display:none;
      }
    }
  }
}
</style>
