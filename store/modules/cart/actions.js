export default {
  addToCart ({ state }, item) {
    const sameItem = state.cart.products.find(({ slug }) => slug === item.slug)
    if (sameItem) {
      sameItem.quantity++
    } else {
      state.cart.products.push(item)
    }
    state.cart.total += item.price
  },
  fillCart ({ state }, cart) {
    if (cart) {
      state.cart = cart
    }
  },
  emptyCart ({ state }) {
    state.cart = {
      products: [],
      total: 0
    }
  }
}
