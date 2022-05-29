export default {
  async list({commit}) {
    await this.$stocksList().then((response) => {
      commit('FETCH_LIST', response.data.data)
    })
  },
  async create({commit}, data) {
    await this.$stocksCreate(data.body, data.corporation).then((response) => {
      commit('ADD_LIST', response.data.data)
    })
  },
  async update({commit}, data) {
    await this.$stocksUpdate(data.body, data.stock).then((response) => {
      commit('UPDATE_LIST')
    })
  },
}
