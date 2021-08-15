import axios from 'axios'

export default {
  collection: async ({commit}, apiUrl) => {
    const list = await axios.get(`${apiUrl}/home/collections`).then((response) => {
      return response.data.data
    })

    commit('GET_COLLECTION', list)
  }
}
