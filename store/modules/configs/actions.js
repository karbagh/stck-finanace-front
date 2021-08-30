export default {
  loader: async ({commit}, status) => {
    commit('SET_LOADER', status)
  }
}
