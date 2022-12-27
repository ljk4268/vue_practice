//영화검색과 관련된 데이터 

export default {
  // module!
  namespaced: true,
  // 실제로 취급해야하는 data!
  state: () => ({
    movies: []
  }),
  // 계산된 상태를 만들어내는 computed!
  getters: {
    movieIds(state){
      return state.movies.map(m => m.imdbID)
    }
  },
  // 함수들을 만들어서 데이터 활용할 수 있는 methods!
  // mutations : 변이, 관리하는 데이터를 변경해 줄 수 있다.
  // mutations에서만 state에 있는 데이터를 변경할 수 있음! 
  mutations: {
    resetMoives(state){
      state.movies = []
    }
  },
  // actions : 데이터를 직접적으로 변경할 수 없음. 
  // 비동기로 동작한다. 
  actions: {
    searchMovies(){

    }
  },
}