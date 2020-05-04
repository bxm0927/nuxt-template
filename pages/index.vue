<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">nuxt-template</h1>
      <h2 class="subtitle">My beautiful Nuxt.js project</h2>

      <div class="links">
        <a class="button--green" href="/list" type="primary">列表页</a>
        <a class="button--grey" href="https://nuxtjs.org/" target="_blank">关于</a>
      </div>

      <div class="count-box">
        <el-button>count: {{ count }}</el-button>
        <el-button @click="increase">count increase</el-button>
        <el-button @click="decrease">count decrease</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
import { Button } from 'element-ui'
import Logo from '@/components/Logo.vue'

Vue.use(Button)

export default {
  components: {
    Logo,
  },
  async fetch({ store }) {
    await store.dispatch('fetchCount')
  },
  computed: {
    // 将 this.$store.state.count 映射为 this.count
    ...mapState(['count']),
  },
  methods: {
    // 将 this.$store.commit('setCount') 映射为 this.setCount()
    ...mapMutations(['setCount']),
    increase() {
      const newCount = this.count + 1
      this.setCount(newCount)
    },
    decrease() {
      const newCount = this.count - 1
      this.setCount(newCount)
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: system-ui;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
    &:hover {
      color: #fff;
      background-color: #3b8070;
    }
  }
  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
    &:hover {
      color: #fff;
      background-color: #35495e;
    }
  }
}

.count-box {
  margin-top: 20px;
}
</style>
