export const state = () => ({
  categories: [],
  categoriesbase: [],
})

export const getters = {
  categories: (state) => {
    return state.categories
  },
  categoriesbase: (state) => {
    return state.categoriesbase
  },
}

export const actions = {
  async CategoriesData({ commit }) {
    await this.$axios.get('/api/categories').then((response) => {
      commit('SET_CATEGORIES', response.data.data)
    })
  },
  async CategoriesbaseData({ commit }) {
    await this.$axios.get('/api/categories/base').then((response) => {
      commit('SET_CATEGORIES_BASE', response.data.data)
    })
  },
  async CategoriesbaseAdd({ commit }, data) {
    await this.$axios.post('/api/categories/create', data).then((response) => {
      commit('SET_CATEGORIES_BASE', response.data.data)
    })
  },
}

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  SET_CATEGORIES_BASE(state, base) {
    state.categoriesbase = base
  },
}
