export const state = () => ({
  myshop: {},
})

export const getters = {
  getMyShop: (state) => {
    return state.myshop
  },
}

export const actions = {
  async setMyShop({ commit }, ) {
    let res = await this.$axios.$get(`/api/my-shops/${this.$auth.user.id}`)
    console.log(res)
    commit('SET_MY_SHOP', res.data)
  },
}

export const mutations = {
  SET_MY_SHOP(state, myshop) {
    state.myshop = myshop
  },
}
