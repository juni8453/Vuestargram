import { createStore } from 'vuex'
import posts from '../json/posts.js'

const store = createStore({
  state() {
    return {
      posts: posts,
    }
  },

  mutations: {
    addLikes(state, index) {

      if (state.posts[index].liked === false) {
        state.posts[index].likes ++;
        state.posts[index].liked = true;
      } else {
        state.posts[index].likes --;
        state.posts[index].liked = false;
      }
    },

  },

})

export default store;