<template>
  <section class="pagination-wrapper">
    <ul class="container">
      <li
        v-for="(item, index) in paginationArr"
        :key="index"
        class="page-btn"
        :class="{ cur: item.cur, disabled: !item.clickable }"
        @click="gotoPage(item)"
      >
        {{ item.text }}
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('list', ['paginationArr']),
  },
  methods: {
    async gotoPage(page) {
      if (!page.clickable) return
      await this.$store.dispatch('list/fetchClassesData', {
        curPage: page.index,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.pagination-wrapper {
  text-align: center;
  margin: 40px auto 80px;
}

.page-btn {
  box-sizing: border-box;
  display: inline-block;
  margin-right: 8px;
  padding: 0 12px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: #f7f8fa;
  border-radius: 4px;
  font-size: 14px;
  color: #595959;
  user-select: none;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: #ff8d40;
  }
  // 当前页
  &.cur {
    color: #fff;
    background-color: #ff8d40;
    opacity: 1;
  }
  // 不可点击页
  &.disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
}
</style>
