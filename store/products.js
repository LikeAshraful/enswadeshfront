export const state = () => ({
  products: [],
  product: {},
})

export const getters = {
  products: (state ) => {
    return state.products
  },
  getProduct: (state) => {
    return state.product
  }
}

export const actions = {

  async getProducts({ commit }) {
     await this.$axios.get('/api/products-by-shop/'+1)
    .then(response => {
      commit('SET_PRODUCTS', response.data)
    })
  },

  async getSingleProduct({commit}, id) {
    let res = await this.$axios.$get(`/api/products/${id}`)
    
    commit('SET_SINGLE_PRODUCT', res.data)
  }

}

export const mutations = {

  SET_PRODUCTS(state, products) {
    state.products = products
  },
  SET_SINGLE_PRODUCT(state, product) {
    state.product = product
  }

}
