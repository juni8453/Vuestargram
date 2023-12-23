<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li @click="step += 1">Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" alt="임시 로고"/>
  </div>

  <Container :posts="posts" :step="step" :fileUrl="fileUrl"/>

  <button @click="morePost" type="button" class="btn">피드 더보기</button>

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
import posts from "./json/posts.js"
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Container: Container
  },
  data() {
    return {
      posts: posts,
      moreCount: 0,
      step: 0,
      fileUrl: '',
    }
  },
  methods: {
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
