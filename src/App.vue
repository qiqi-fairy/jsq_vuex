<template>
  <div>
    <my-addition></my-addition>
    <p>---------------------</p>
    <my-subtraction></my-subtraction>
  </div>
</template>
<script>
import Addition from './components/Addition.vue'
import Subtraction from './components/Subtraction.vue'

export default {
  // State 提供唯一的公共数据源，说是有共享的数据都要统一的放到Store的State中进行存储
  // 创建 Store 数据源，提供唯一公共数据
  data() {
    return {}
  },
  components: {
    'my-addition': Addition,
    'my-subtraction': Subtraction
  }
}
</script>
<style lang="less" scoped></style>
