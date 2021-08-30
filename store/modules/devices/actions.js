import axios from "axios";

export default {
  device: async ({commit, app}, params) => {
    const device = await axios.get(`${params.apiUrl}/devices/${params.slug}`)
      .then((response) => {
      return response.data.data
    })

    commit('GET_DEVICE', device)
  },
}
