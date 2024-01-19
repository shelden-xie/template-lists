/**
 * 下面有两种写法，自行选择，优缺点可对照官网使用
 * 如果需要持久化存储可以使用 pinia-plugin-persistedstate
 */

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

// export const useCounterStore = defineStore('counter', {
//   state: () => ({ count: 0 }),
//   getters: {
//     double: (state) => state.count * 2
//   },
//   actions: {
//     increment() {
//       this.count++
//     }
//   }
// })
