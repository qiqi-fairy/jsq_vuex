import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    // 在mutations函数中不能写异步的代码
    add(state) {
      state.count++ // 变更状态
    },
    // 触发 mutation 时传递参数
    addN(state, step) {
      state.count += step // 变更状态
    },
    sub(state) {
      state.count--
    },
    subN(state, step) {
      state.count -= step
    }
  },
  // Actions用于出路异步任务：如果通过异步操作变更数据，必须通过Action，而不能使用Mutation，但是在Action中还是要通过触发Mutation的方式间接变更数据（触发actions的第一种方式：dispath）
  actions: {
    addAsync(context) {
      setTimeout(() => {
        // 在action中，不能直接修改state中的数据
        context.commit('add') // context 就是指this.$store
      }, 1000)
    },
    addNAsync(context, step) {
      setTimeout(() => {
        context.commit('addN', step)
      })
    },
    subAsync(context) {
      setTimeout(() => {
        // 在action中，不能直接修改state中的数据
        context.commit('sub') // context 就是指this.$store
      }, 1000)
    },
    subNAsync(context, step) {
      setTimeout(() => {
        context.commit('subN', step)
      }, 1000)
    }
  },
  modules: {},
  getters: {
    showNum(state) {
      return '当前最新的数量是【' + state.count + '】'
    }
  }
})
