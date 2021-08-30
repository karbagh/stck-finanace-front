export default {
  ADD_PRODUCT: (state, item) => {
    const sameItem = state.products.find(({slug}) => slug === item.slug)
    if (sameItem) {
      sameItem.quantity++
    } else {
      state.products.push(item)
    }
    state.total += item.price
  },
  FILL_CART: (state, cart) => {
    if (cart) {
      state.cart = cart
    }
  },
  EMPTY_CART: (state) => {
    state.cart = {
      products: [],
      total: 0
    }
  }
}
