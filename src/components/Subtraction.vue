<template>
  <div>
    <!-- <h3>当前最新的count值是：{{ count }}</h3> -->
    <h3>{{showNum}}</h3>
    <button @click="btnHandle1">-1</button>
    <button @click="btnHandle2">-N</button>
    <button @click="btnHandle3">-1 Async</button>
    <button @click="btnHandle4">-N Async</button>
    <button @click="subAsync">-1 Async</button>
    <button @click="subNAsync(5)">-N Async 无handle</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['count']), // 展开运算符，意思是：把全局组件中的数据映射为我当前组件的计算属性
    ...mapGetters(['showNum'])
  },
  // 第二种方式
  methods: {
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsync', 'subNAsync']),
    btnHandle1() {
      this.sub()
    },
    btnHandle2() {
      this.subN(3)
    },
    // btnHandle3() {
    //   this.$store.dispatch('subAsync')
    // },
    // btnHandle4() {
    //   this.$store.dispatch('subNAsync', 5)
    // }
    btnHandle3() {
      this.subAsync()
    },
    btnHandle4() {
      this.subNAsync(5)
    }
  }
}
</script>
