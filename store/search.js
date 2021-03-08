export const state = () => ({
  data: [],
  isLoading: true,
})

export const getters = {
  result: (state) => state.data,
  isLoading: (state) => state.isLoading,
}

export const mutations = {
  SEARCH_DATA(state, data) {
    state.data = data
    state.isLoading = false
  },
}
export const actions = {
  async loadSearch({ commit }, data) {
    if (data) {
        let datares = await this.$axios.post('api/search-all-header/', {
          params: { keyword: data.keyword, selectType: data.selectType },
        })
      if (data.selectType == 1) {

        this.$router.push({ path: '/search/markets' })
      } else if (data.selectType == 2) {

        this.$router.push({ path: '/search/shops' })
      } else if (data.selectType == 3) {

        this.$router.push({ path: '/search/products' })
      } else {
        this.$router.push({ path: '/' })
      }
      commit('SEARCH_DATA', datares.data.data,)
    }
  }
}
