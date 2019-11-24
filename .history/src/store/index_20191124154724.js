import Vue from 'vue'
import Vuex from 'vuex'
import VuexPresistence, { VuexPersistence } from 'vuex-persist'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const vuexLocal = new VuexPersistence({
  strage: window.localStorage
})

export default new Vuex.Store({
  state: {
  },
  mutations,
  actions,
  plugins: [vuexLocal, plugin],
  strict: debug
})
