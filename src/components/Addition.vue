<template>
  <div>
    <!-- <h3>当前最新的count值是：{{ $store.state.count }}</h3> -->
    <h3>{{$store.getters.showNum}}</h3>
    <button @click="btnHandle1">+1</button>
    <button @click="btnHandle2">+N</button>
    <button @click="btnHandle3">+1 Async</button>
    <button @click="btnHandle4">+N Async</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    btnHandle1() {
      //   this.$store.state.count++ // 不允许在组件直接修改store的数据
      this.$store.commit('add') // 触发 mutations 的第一种方式 commit
    },
    btnHandle2() {
      this.$store.commit('addN', 3)
    },
    btnHandle3() {
      // 这里的 dispath函数，专门用来触发 actions函数
      this.$store.dispatch('addAsync')// 触发 actions 的第一种方式 dispath
    },
    btnHandle4() {
      this.$store.dispatch('addNAsync', 3)
    }
  }
}
</script>
