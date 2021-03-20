export const state = () => ({
  brands: [],
})

export const getters = {
  brands: (state) => {
    return state.brands
  },
  getProduct: (state) => {
    return state.product
  },
}

export const actions = {
  async BrandData({ commit }) {
    await this.$axios.get('/api/brands').then((response) => {
      commit('SET_CATEGORIES', response.data.data)

    })
  },


}

export const mutations = {
  SET_CATEGORIES(state, brands) {
    state.brands = brands
  },
 
}
