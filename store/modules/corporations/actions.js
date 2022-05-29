export default {
  async list({commit}) {
    await this.$corporationsList().then((response) => {
      commit('FETCH_LIST', response.data.data)
    })
  },
}
