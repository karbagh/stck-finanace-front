import Vue from 'vue'
import Vuex from 'vuex'
import banners from './modules/banners'
import cart from './modules/cart'
import categories from './modules/categories'
import collections from './modules/home'
import devices from './modules/devices'
import services from './modules/services'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    banners: banners,
    cart: cart,
    categories: categories,
    collections: collections,
    devices: devices,
    services: services,
  }
})
