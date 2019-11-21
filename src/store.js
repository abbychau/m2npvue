import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {
      account: '',
      password: '',
      isLogin: false
    },
    users: {}
  },
  mutations: {
    setUserData(state, { userData }) {
      state.user.account = userData.account
      state.user.password = userData.password
      state.user.isLogin = true
    },
    setUsers(state, usersArrary) {
      // console.log(usersArrary)
      state.users = usersArrary.reduce((map, obj) => {
        map[obj.id] = obj
        return map
      }, {})
    }
  }
})

export default store
