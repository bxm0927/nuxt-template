<template>
  <div class="page-detail">
    <div class="detail-content container">
      <header class="detail-header">
        <h1 class="title">课程章节</h1>
        <div class="back" @click="$router.go(-1)">&lt; 返回</div>
      </header>

      <ul class="chapter-list">
        <li v-for="(item, index) in classChapter" :key="index" class="chapter-item">
          <h2>第{{ index + 1 }}章 {{ item.title }}</h2>

          <ul class="subchapter-list">
            <li v-for="(sub, subIndex) in item.subTitle" :key="subIndex" class="subchapter-item">
              <span>{{ index + 1 }}-{{ subIndex + 1 }}</span>
              <a :href="`http://www.imooc.com/${sub.titletype}/${sub.mid}`" target="_blank">
                {{ sub.title }}
              </a>
              <span v-if="sub.timespan" class="time">({{ sub.timespan }})</span>
              <span v-if="sub.titletype === 'code'" class="type">(编程)</span>
              <span v-else-if="sub.titletype === 'ceping'" class="type">(练习)</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async asyncData({ params }) {
    return { id: params.id }
  },
  computed: {
    ...mapState('detail', ['classChapter']),
  },
  mounted() {
    this.$store.dispatch('detail/fetchClassChapter', { cid: this.id })
  },
}
</script>

<style lang="scss" scoped>
.detail-content {
  width: 800px;
}

.detail-header {
  position: relative;
  .title {
    margin-top: 40px;
    text-align: center;
  }
  .back {
    position: absolute;
    top: 0;
    left: 0;
    height: 42px;
    line-height: 42px;
    cursor: pointer;
    &:hover {
      color: #f20d0d;
      font-weight: bold;
    }
  }
}

.chapter-list {
  margin: 40px auto;
}

.chapter-item {
  margin-bottom: 8px;
  padding: 24px 32px 32px;
  background: #fff;
  box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.1);
  border-radius: 12px;
}

.subchapter-list {
  padding-left: 2em;
}

.subchapter-item {
  color: #1c1f21;
  line-height: 2.8;
  a {
    color: inherit;
  }
}
</style>
