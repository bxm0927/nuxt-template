<template>
  <div class="page-list">
    <h1>page-list</h1>

    <ul>
      <li v-for="item in classesList" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch({ store }) {
    await store.dispatch('list/fetchClassesList')
  },
  computed: {
    ...mapState('list', ['classesList']),
  },
}
</script>

<style lang="scss" scoped>
.page-list {
  color: red;
}
</style>
