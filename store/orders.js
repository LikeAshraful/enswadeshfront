export const state = () => ({
  shoporders: []
})

export const getters = {
  getOrdersByShop: (state) => {
    return state.shoporders
  },
}

export const actions = {
  async setOrdersByShop({ commit }, id) {
    let res = await this.$axios.$get(`/api/orders/shop/${id}`)
    commit('SET_SHOP_ORDERS', res.data)
  }
}

export const mutations = {
  SET_SHOP_ORDERS(state, shoporders) {
    state.shoporders = shoporders
  }
}
