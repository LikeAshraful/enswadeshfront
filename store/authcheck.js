// export const state = {
//   token: $auth.token,
//   user: $auth.user,
// };

// export const getters = {
//   token: (state) => state.token,
//   isLoggedIn(state) {
//     if (state.token) {
//       return true;
//     }
//     return false;
//   },
//   user: (state) => state.user,
//   isUser(state) {
//     if (state.user) {
//       return state.user;
//     }
//     return false;
//   },
// };

// export const actions = {
//   setToken({ commit }, token) {
//     this.$auth.$storage.setLocalStorage("en.token", token);
//     commit("SET_TOKEN", token);
//   },
//   removeToken({ commit }) {
//     this.$auth.$storage.removeLocalStorage("en.user");
//     this.$auth.$storage.removeLocalStorage("en.token");
//     commit("REMOVE_TOKEN");
//   },
//   setUser({ commit }, user) {
//     this.$auth.$storage.setLocalStorage("en.user", JSON.stringify(user));
//     commit("SET_USER", user);
//   },
// };

// export const mutations = {
//   SET_TOKEN(state, token) {
//     state.token = token;
//   },
//   REMOVE_TOKEN(state) {
//     state.token = null;
//     state.user = null;
//   },
//   SET_USER(state, user) {
//     state.user = user;
//   },
// };
