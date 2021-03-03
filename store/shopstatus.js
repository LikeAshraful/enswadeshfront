export const state = () => ({
  shop_status : 0,
  id : '',
})

export const mutations = {
  add(state, value) {
    state.shop_status = value
  },
  setID(state, value) {
    state.id = value
  }
}
