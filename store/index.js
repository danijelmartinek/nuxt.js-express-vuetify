export const state = () => ({
  authUser: null
})

export const mutations = {
  SET_USER: function (state, user) {
    state.authUser = user
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    if (req.session && req.user) {
      commit('SET_USER', req.user)
    }
  }
}
