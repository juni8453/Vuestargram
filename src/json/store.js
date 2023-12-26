import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      name: "kim",
      age: 20,
      likes: 30,
      isLikes: false,
    }
  },

  mutations: {
    addAge(state, payload) {
      state.age += payload;
    },

    addLikes(state) {
      if (state.isLikes) {
        state.likes -= 1;
        state.isLikes = false;
      } else {
        state.likes += 1;
        state.isLikes = true;
      }
    }
  }

})

export default store;