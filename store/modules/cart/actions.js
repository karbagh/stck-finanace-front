export default {
  addToCart:  async ({ commit }, item) => {
    commit('ADD_PRODUCT', item)
  },
  fillCart: async ({ commit }, cart) => {
    commit('FILL_CART')
  },
  emptyCart: async ({ commit }) => {
    commit('EMPTY_CART')
  }
}
