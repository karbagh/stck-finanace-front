export default ($axios) => {
  return {
    stocksList: async (params) => {
      return await $axios.get('/v1/stocks', {
        params
      })
    },
    stocksCreate: async  (data, slug) => {
      return await $axios.post(`/v1/stocks/${slug}`, data)
    },
    stocksUpdate: async  (data, id) => {
      return await $axios.put(`/v1/stocks/${id}`, data)
    }
  }
}
