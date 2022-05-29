export default ($axios) => {
  return {
    corporationsList: async (params) => {
      return await $axios.get('/v1/corporations', {
        params
      })
    },
    corporationsCreate: async  (data) => {
      return await $axios.post('/v1/corporations', data)
    }
  }
}
