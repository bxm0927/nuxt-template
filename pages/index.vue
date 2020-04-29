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
import Logo from '~/components/Logo.vue'
import { Button } from 'element-ui'

Vue.use(Button)

export default {
  components: {
    Logo,
  },
  // 在页面初始化之前请求一些数据
  async fetch({ store }) {
    await store.dispatch('fetchCount')
  },
  data() {
    return {
      ip: '',
    }
  },
  computed: {
    // 映射 this.count 为 this.$store.state.count
    ...mapState(['count']),
  },
  mounted() {
    this.fetchIP()
  },
  methods: {
    // 将 `this.setCount()` 映射为 `this.$store.commit('setCount')`
    ...mapMutations(['setCount']),
    increase() {
      const newCount = this.count + 1
      this.setCount(newCount)
    },
    decrease() {
      const newCount = this.count - 1
      this.setCount(newCount)
    },
    async fetchIP() {
      const { status, data } = await this.$axios.get('http://icanhazip.com')
      if (status === 200) {
        this.ip = data
      }
    },
  },
}
</script>

<style>
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
}

.count-box {
  margin-top: 20px;
}
</style>
