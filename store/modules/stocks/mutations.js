export default {
  UPDATE_LIST: (state, stock) => {
    state.list = this.dispatch('modules/stocks/list').then(response => response.data.data)
  },
  ADD_LIST: (state, stock) => {
    state.list.push(stock)
  },
  FETCH_LIST: (state, list) => {
    state.list = list
  },
}
