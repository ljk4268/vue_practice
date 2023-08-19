import { defineStore } from 'pinia'

// 다른 컴포넌트에서 사용할 수 있게 export해주고
// 가져온 defineStore()에 첫번째 파라미터로 id값 지정해주고 (='counter')
// 두번째 파라미터로 store에 관련된 옵션을 정의해주면 된다.
export const useCounterStore = defineStore('counter', {
  // 상태
  // 화살표 함수는 객체 반환시 소괄호 사용 (= return기능)
  state: () => ({
    counter: 1,
  }),
  // computed
  getters: {
    doubleCount: state => state.counter * 2,
  },
  // method
  actions: {
    increment() {
      this.counter++
    },
  },
})
