export const state = () => ({
  addproducts: process.server ? [] : !!JSON.parse(localStorage.getItem("addproducts"))
});

export const getters = {
  addproducts: (state) => state.addproducts,
};

export const actions = {
  addProduct({ commit, state }, { item, qtn }) {
    console.log(item
    );
    if (qtn < 0 || qtn === 'undefined') {
      let pro = state.addproducts;
      for (var i = 0; i < pro.length; i++) {
        if (pro[i].id == item.id) {
          commit("UPDATE_COUNT", { count: pro[i].count + 1, index: i });
          saveProduct(state.addproducts);
          return;
        }
      }
      let p = {
        id: item.id,
        price: item.price,
        discount: item.discount,
        stocks: item.stocks,
        name: item.name,
        image: item.thumbnail,
        qtn: item.qtn,
        count: 1,
      };

      commit("ADD_PRODUCT", p);
      saveProduct(state.addproducts);
    } else {
      let pro = state.addproducts;
        for (var i = 0; i < pro.length; i++) {
          if (pro[i].id == item.id) {
            commit("UPDATE_COUNT", { count: qtn, index: i });
            saveProduct(state.addproducts);
            return;
          }
        }
        let p = {
          id: item.id,
          price: item.price,
          discount: item.discount,
          stocks: item.stocks,
          name: item.name,
          image: item.thumbnail,
          qtn: qtn,
          count: qtn,
        };

        commit("ADD_PRODUCT", p);
        saveProduct(state.addproducts);
    }
  },

  removeProduct({ commit, state }, item) {
    let pro = state.addproducts;
    for (var i = 0; i < pro.length; i++) {
      if (pro[i].id == item.id) {
        if (pro[i].count <= 1) {
          commit("REMOVE_ITEM", i);
          saveProduct(state.addproducts);
          return;
        }
        commit("UPDATE_COUNT", { count: pro[i].count - 1, index: i });
        saveProduct(state.addproducts);
        return;
      }
    }
  },

  allProductRemove({ commit, state }, id) {
    let pro = state.addproducts;
    for (var i = 0; i < pro.length; i++) {
      if (pro[i].id == id) {
        commit("REMOVE_ITEM", i);
        saveProduct(state.addproducts);
        return;
      }
    }
  },

  allProductRemoveCart({ commit, state }) {
    let pro = state.addproducts;
    commit("REMOVE_ITEMAll", pro);
    saveProduct(state.addproducts);
    return;
  },
};

export const mutations = {
  ADD_PRODUCT(state, item) {
    state.addproducts.push(item);
  },

  UPDATE_COUNT(state, { count, index }) {
    state.addproducts[index].count = count;
  },

  REMOVE_ITEM(state, index) {
    state.addproducts.splice(index, 1);
  },
  REMOVE_ITEMAll(state, index) {
    state.addproducts.splice(index);
  },
};

function saveProduct(addproducts) {
  process.server ? '' : !!localStorage.setItem("addproducts", JSON.stringify(addproducts));
}
