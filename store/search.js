export const state = () => ({
  data: [],
  isLoading: true,
})

export const getters = {
  result: (state) => state.data,
  isLoading: (state) => state.isLoading,
}

export const actions = {
  async loadSearch({ commit }, data) {
    if (data) {
      if (data.keyword !== null) {
        var key = data.keyword;
      } else {
        var key = a;
      }
        let datares = await this.$axios.get('/api/searchallheader/' + data.selectType + '/' + key)
        // let datares = this.$axios.post('/api/searchallheader/', {
        //   params: { keyword: data.keyword, selectType: data.selectType },
        // })
      if (data.selectType == 1) {
        commit('SET_SEARCH_DATA', datares.data.data)
        this.$router.push({ path: '/search/markets' })
      } else if (data.selectType == 2) {
        commit('SET_SEARCH_DATA', datares.data.data)
        this.$router.push({ path: '/search/shops' })
      } else if (data.selectType == 3) {
        commit('SET_SEARCH_DATA', datares.data.data)
        this.$router.push({ path: '/search/products' })
      } else {
        commit('SET_SEARCH_DATA', datares.data)
        this.$router.push({ path: '/search/all' })
      }
    }
  }
}

export const mutations = {
  SET_SEARCH_DATA(state, data) {
    state.data = data
    state.isLoading = false
  },
}
