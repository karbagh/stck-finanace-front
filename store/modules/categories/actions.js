import axios from 'axios'

export default {
  list: async ({commit}, apiUrl) => {
    const list = await axios.get(`${apiUrl}/categories`).then((response) => {
      return response.data.data
    })

    commit('GET_LIST', list)
  }
}
