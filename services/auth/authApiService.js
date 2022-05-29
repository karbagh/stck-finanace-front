export default ($axios) => {
  return {
    login: async (data) => {
      return await $axios.post('/oauth/token', {
        ...data,
        grant_type: 'password',
        scope: ''
      })
    },
  }
}
