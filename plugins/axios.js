import corporationApiService from '~/services/corporation/corporationApiService'
import authApiService from '~/services/auth/authApiService'
import stockApiService from '~/services/stock/stockApiService'
import clientApiService from '~/services/client/clientApiService'

export default ({$axios, store, redirect}, inject) => {
  const allMethods = {
    ...corporationApiService($axios),
    ...authApiService($axios),
    ...stockApiService($axios),
    ...clientApiService($axios),
  }
  const methods = Object.keys(allMethods)
  methods.forEach((method) => {
    inject(method, allMethods[method])
  })

  $axios.onRequest((config) => {
    config.headers.common['Authorization'] = `Bearer ${store.state.modules.auth.credentials?.access_token}`
    config.headers.common['Access-Control-Allow-Origin'] = config.baseURL
    config.headers.common['Accept'] = 'application/json'
  })

  $axios.onError(error => {
    if (error.response.status === 401) {
      redirect('/login')
    }
  })
}
