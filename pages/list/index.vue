<template>
  <div class="page-list">
    <h1>page-list</h1>

    <ul>
      <li v-for="item in classesList" :key="item.id">
        <img :src="item.image" :alt="item.title" />
        <h3 class="title">{{ item.title }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  // async fetch({ store }) {
  //   await store.dispatch('list/fetchClassesList')
  // },
  computed: {
    ...mapState('list', ['classesList']),
  },
  mounted() {
    this.$store.dispatch('list/fetchClassesList')
  },
}
</script>

<style lang="scss" scoped>
.page-list {
  color: red;
}
</style>
