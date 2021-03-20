export const state = () => ({
  products: [],
  product: {},
})

export const getters = {
  products: (state) => {
    return state.products
  },
  getProduct: (state) => {
    return state.product
  },
}

export const actions = {
  async addProducts({ commit }, products) {
    let response = await this.$axios.post(
      '/api/products/',
      products,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      }
    )
    commit('SET_PRODUCTS', response.data)
  },

  async getSingleProduct({ commit }, id) {
    let res = await this.$axios.$get(`/api/products/${id}`)

    commit('SET_SINGLE_PRODUCT', res.data)
  },
}

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
  SET_SINGLE_PRODUCT(state, product) {
    state.product = product
  },
}
