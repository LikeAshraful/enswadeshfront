export const state = () => ({
  friends: {},
  searchfriend: [],
})

export const getters = {
  followers: (state) => {
    return state.friends.followers
  },
  following: (state) => {
    return state.friends.following
  },
  searchfriend: (state) => {
    return state.searchfriend
  },
}

export const actions = {
  async FriendData({ commit }) {
    let res = await this.$axios.$get(`/api/index`)

    commit('SET_FRIEND', res.data)
  },
  async SearchFriendData({ commit }, keyword) {
    let res = await this.$axios.$get(
      `/api/search/shoping-friend?keyword=` + keyword
    )
    console.log(res)
    commit('SEARCH_FRIEND', res.data.data)
  },
}

export const mutations = {
  SET_FRIEND(state, friends) {
    state.friends = friends
  },
  SEARCH_FRIEND(state, searchfriend) {
    state.friends.followers = searchfriend
  },
}
