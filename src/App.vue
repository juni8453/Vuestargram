<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step === 1" @click="step += 1">Next</li>
      <li v-if="step === 2" @click="publish">Write</li>
    </ul>
    <img src="./assets/logo.png" class="logo" alt="임시 로고"/>
  </div>

  <!-- store 내 데이터 수정 예시
  <p>{{$store.state.age}}</p>
  <button @click="$store.commit('addAge', 10)"></button>
  -->

  <Container @writePost="writeTitle = $event"
             :posts="posts"
             :step="step"
             :fileUrl="fileUrl"
             :filters="filters"
             :filterName="filterName"
  />

  <!-- method 로 axios 요청하는 예시
    <button @click="morePost" type="button" class="btn">피드 더보기</button>
  -->

  <!-- vuex 의 actions, mutations 를 활용해 axios 요청하는 예시 -->
  <!-- 결국 vuex 의 state 에 데이터를 모아두는 형식으로 개발하지까 이렇게 많이 사용할 듯 .. -->
<!--  <button @click="$store.dispatch('getMoreDate')" type="button" class="btn">피드 더보기</button>-->
  <button @click="getMoreDate" type="button" class="btn">피드 더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <!-- <input multiple> 사용하면 여러 장 등록 가능 -->
      <input @change="upload" type="file" id="file" class="inputfile"/>
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

</template>

<script>
import Container from "./components/Container";
import filters from "./json/filters.js"
import axios from 'axios';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    Container: Container
  },

  // emitter 로 발사한 데이터 수신은 mounted() 에 한다.
  // 너무 많이 쓰면 헷갈리니 vuex 를 쓰는게 낫다.
  mounted() {
    this.emitter.on('sendFilter', (filterName) => {
      console.log(filterName);
      this.filterName = filterName;
    })
  },

  data() {
    return {
      // 이제 vuex state 에서 posts, moreCount 를 관리하기 때문에 data 에서 빼준다.
      // posts: posts,
      // moreCount: 0,

      step: 0,
      fileUrl: '',
      writeTitle: '',
      filters: filters,
      filterName: '',
    }
  },

  // computed 내부 함수는 호출마다 해당 함수가 실행되지 않는다.
  // vue 파일을 처음 load 할 때 함수가 호출되면서 값을 간직한다. 이후 호출될 때마다 저장된 값을 뱉어줌.
  // 즉, 처음 계산 결과를 저장해두는 용도
  computed: {
    ...mapState(['posts', 'moreCount']),
  },

  // methods 내부 함수는 호출마다 해당 함수가 실행된다.
  // getMoreDate 는 피드를 갱신하는 것이니 computed 가 아니라 methods 가 맞는듯 ?
  methods: {
    ...mapActions(['getMoreDate']),

    morePost() {
      axios.get(`https://codingapple1.github.io/vue/more${this.moreCount}.json`)
      .then((response) => {
        console.log(response);
        this.posts.push(response.data);
        this.moreCount += 1;
      }).catch((err) => {
        console.log(err);
      });
    },

    // <input> 활용 시 event 로 파일 정보를 확인할 수 있다.
    upload(event) {
      let file = event.target.files;
      console.log(file[0].type);
      let fileUrl = URL.createObjectURL(file[0]); // 임시 URL 생성
      this.step = 1; // 업로드 후 다음 페이지 이동
      this.fileUrl = fileUrl; // data 에 저장
    },

    publish() {
      let uploadPost = {
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.fileUrl,
        likes: 0,
        date: "오늘 날짜",
        liked: false,
        content: this.writeTitle,
        filter: this.filterName
      };

      this.posts.unshift(uploadPost);
      this.step = 0;
    },


  }
}
</script>

<style>
body {
  margin: 0;
}

ul {
  padding: 5px;
  list-style-type: none;
}

.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}

.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 80px;
  position: sticky;
  top: 0;
}

.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}

.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 35px;
}

.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}

.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}

.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}

.inputfile {
  display: none;
}

.input-plus {
  cursor: pointer;
}

</style>
