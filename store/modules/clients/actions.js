export default {
  async list({commit}) {
    await this.$clientsList().then((response) => {
      commit('FETCH_LIST', response.data.data)
    })
  },
  async create({commit}, data) {
    await this.$clientsCreate(data).then((response) => {
      commit('FETCH_LIST', response.data.data)
    })
  },
  async buy({commit}, data) {
    await this.$stocksBuy(data.body, data.client).then((response) => {
      commit('FETCH_LIST', response.data.data)
    })
  },
  async sell({commit}, data) {
    await this.$stocksSell(data.body, data.client).then((response) => {
      commit('FETCH_LIST', response.data.data)
    })
  },
}
