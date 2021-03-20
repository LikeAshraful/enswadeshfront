export const state = () => ({
  categorys: [],

})

export const getters = {
  categorys: (state) => {
    return state.categorys
  },
  getProduct: (state) => {
    return state.product
  },
}

export const actions = {
  async CategoriesData({ commit }) {
    await this.$axios.get('/api/categories').then((response) => {
      commit('SET_CATEGORIES', response.data.data)
     
    })
  },


}

export const mutations = {
  SET_CATEGORIES(state, categorys) {
    state.categorys = categorys
  },

}
