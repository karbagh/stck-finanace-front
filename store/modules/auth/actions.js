export default {
  async login ({commit}, data) {
    await this.$login({
      ...data,
      client_id: this.$config.clientId,
      client_secret: this.$config.clientSecret,
    }).then((response) => {
      localStorage.setItem('access_token', response.data.access_token)
      localStorage.setItem('refresh_token', response.data.refresh_token)
      commit('SET_CREDENTIALS', response.data)
    })
  },
}
