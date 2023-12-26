import {createStore} from 'vuex'
import posts from '../json/posts.js'
import axios from 'axios'

const store = createStore({
  state() {
    return {
      posts: posts,
      moreCount: 0,
    }
  },

  mutations: {
    addLikes(state, index) {
      if (state.posts[index].liked === false) {
        state.posts[index].likes++;
        state.posts[index].liked = true;
      } else {
        state.posts[index].likes--;
        state.posts[index].liked = false;
      }
    },

    setMore(state, morePost) {
      state.posts.push(morePost);
      state.moreCount += 1;
    },

  },

  // 서버 요청은 mutations 대신 actions 에 사용
  // state 수정은 mutations 담당이라 context.commit() 을 활용해 mutations 에서 수정하도록 해야한다.
  // actions 함수의 파라미터는 $store 라고 생각하면 됨.
  actions: {
    getMoreDate(context) {
      axios.get(`https://codingapple1.github.io/vue/more${context.state.moreCount}.json`)
      .then((response) => {
        context.commit('setMore', response.data);
      }).catch((err) => {
        console.log(err);
      });
    }
  },

})

export default store;