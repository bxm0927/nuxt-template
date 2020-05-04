<template>
  <div class="page-list">
    <Banner />
    <NoteWrapper />
    <Pagination />
  </div>
</template>

<script>
import Banner from '@/components/pages/list/Banner.vue'
import NoteWrapper from '@/components/pages/list/NoteWrapper.vue'
import Pagination from '@/components/pages/list/Pagination.vue'

export default {
  components: {
    Banner,
    NoteWrapper,
    Pagination,
  },
  async fetch({ store }) {
    await store.dispatch('list/fetchClassesData')
  },
}
</script>
