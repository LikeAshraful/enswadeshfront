export const state = {
  token: this.localStorage.getItem(this.$auth.token),
  user: JSON.parse(this.localStorage.getItem(this.$auth.user)),
};

export const getters = {
  token: (state) => state.token,
  isLoggedIn(state) {
    if (state.token) {
      return true;
    }
    return false;
  },
  user: (state) => state.user,
  isUser(state) {
    if (state.user) {
      return state.user;
    }
    return false;
  },
};

export const actions = {
  setToken({ commit }, token) {
    this.localStorage.setItem("en.token", token);
    commit("SET_TOKEN", token);
  },
  removeToken({ commit }) {
    this.localStorage.removeItem("en.user");
    this.localStorage.removeItem("en.token");
    commit("REMOVE_TOKEN");
  },
  setUser({ commit }, user) {
    this.localStorage.setItem("en.user", JSON.stringify(user));
    commit("SET_USER", user);
  },
};

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  REMOVE_TOKEN(state) {
    state.token = null;
    state.user = null;
  },
  SET_USER(state, user) {
    state.user = user;
  },
};
