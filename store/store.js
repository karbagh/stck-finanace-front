import Vue from 'vue'
import Vuex from 'vuex'
import corporations from './modules/corporations'
import configs from './modules/configs'
import auth from './modules/auth'
import stocks from './modules/stocks'
import clients from './modules/clients'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    corporations: corporations,
    configs: configs,
    auth: auth,
    stocks: stocks,
    clients: clients,
  }
})
