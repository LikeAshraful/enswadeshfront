export const state = () => ({
  token: process.server ? '' : !!localStorage.getItem("token"),
  user: process.server ? '' : !!JSON.parse(localStorage.getItem("user")),
})

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
    process.server ? '' : !!localStorage.setItem("token", token);
    commit("SET_TOKEN", token);
  },
  removeToken({ commit }) {
    process.server ? '' : !!localStorage.removeItem("user");
    process.server ? '' : !!localStorage.removeItem("token");
    commit("REMOVE_TOKEN");
  },
  setUser({ commit }, user) {
    process.server ? '' : !!localStorage.setItem("user", JSON.stringify(user));
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
