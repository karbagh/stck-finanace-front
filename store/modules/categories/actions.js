import axios from 'axios'

export default {
  list: async ({commit}, apiUrl) => {
    const list = await axios.get(`${apiUrl}/categories`).then((response) => {
      return response.data.data
    })

    commit('GET_LIST', list)
  },

  categoryWithDevices: async ({commit, app}, params) => {
    const category = await axios.get(`${params.apiUrl}/categories/${params.slug}/devices`, {
      params: params.query
    }).then((response) => {
      return response.data.data
    })

    commit('GET_CATEGORY_WITH_DEVICES', category)
  },
}
