export default {
  CREATE_ITEM: (state, response) => {
    state.response = response
  },
  FETCH_LIST: (state, list) => {
    state.list = list
  },
}
