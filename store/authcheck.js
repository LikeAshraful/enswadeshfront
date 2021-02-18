// export const state = {
//   token: context.$auth.$storage.getLocalStorage($auth.token),
//   user: JSON.parse(context.$auth.$storage.getLocalStorage($auth.user)),
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
//     context.$auth.$storage.setLocalStorage("en.token", token);
//     commit("SET_TOKEN", token);
//   },
//   removeToken({ commit }) {
//     context.$auth.$storage.removeLocalStorage("en.user");
//     context.$auth.$storage.removeLocalStorage("en.token");
//     commit("REMOVE_TOKEN");
//   },
//   setUser({ commit }, user) {
//     context.$auth.$storage.setLocalStorage("en.user", JSON.stringify(user));
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
