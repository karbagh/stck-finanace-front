export default ($axios) => {
  return {
    clientsList: async (params) => {
      return await $axios.get('/v1/clients', {
        params
      })
    },
    clientsCreate: async  (data) => {
      return await $axios.post('/v1/clients', data)
    },
    stocksBuy: async  (data, clientId) => {
      return await $axios.put(`/v1/clients/${clientId}/buy`, data)
    },
    stocksSell: async  (data, clientId) => {
      return await $axios.put(`/v1/clients/${clientId}/sell`, data)
    },
  }
}
