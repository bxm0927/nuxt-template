<template>
  <section class="note-wrapper">
    <ul class="note-list clearfix container">
      <li v-for="item in classesList" :key="item.id" class="note-item">
        <nuxt-link :to="`/detail/${item.id}`" class="note-item-link">
          <div class="pictures">
            <img class="note-image" :src="item.image" :alt="item.title" />
          </div>

          <div class="overview">
            <div class="titlebox">
              <span class="title ellipsis">{{ item.title }}</span>
              <span v-if="item.hasnote === 1" class="has-note">(有笔记)</span>
            </div>
            <div class="subtitle">{{ item.subtitle }}</div>
            <div class="time ellipsis">时间：{{ item.timespan }}</div>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('list', ['classesList']),
  },
}
</script>

<style lang="scss" scoped>
.note-item {
  float: left;
  width: 32%;
  margin-top: 30px;
  margin-right: 2%;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 2px 10px 0 rgba(209, 220, 232, 0.63);
  transition: all 0.25s;
  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    transform: translate3d(0, -2px, 0);
  }
  &:nth-child(3n) {
    margin-right: 0;
  }
}

.note-item-link {
  color: #333;
}

.pictures {
  font-size: 0;
  .note-image {
    width: 100%;
    height: 200px;
    border-radius: 4px 4px 0 0;
    background-color: #f1eff1;
    transition: all 0.7s;
  }
}

.overview {
  padding: 1em;
  .titlebox {
    font-size: 20px;
    .title {
      display: inline-block;
      max-width: 100%;
    }
    .has-note {
      font-size: 14px;
      vertical-align: text-top;
    }
  }
  .subtitle,
  .time {
    font-size: 14px;
    margin-top: 10px;
  }
}
</style>
