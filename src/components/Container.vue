<template>
  <div>
    <div>
      <div v-if="step === 0">
        <Post v-for="(post, i) in posts" :key="i"
              :post="post" :step="step"/>
      </div>

      <div v-if="step === 1">
        <div class="upload-image"></div>
        <div class="filters">
          <div class="filter-1"></div>
          <div class="filter-1"></div>
          <div class="filter-1"></div>
          <div class="filter-1"></div>
          <div class="filter-1"></div>
        </div>
      </div>

      <div v-if="step === 2">
        <div class="upload-image"></div>
        <div class="write">
          <textarea class="write-box">write!</textarea>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Post from './Post.vue'

export default {
  name: "Container",
  components: {
    Post: Post,
  },
  props: {
    posts: Array,
    step: Number,
  },
}
</script>

<style>
.upload-image {
  max-width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
  margin: 20px;
}

.filters {
  overflow-x: scroll;
  white-space: nowrap;
  margin: 20px;
}

.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}

.filters::-webkit-scrollbar {
  height: 5px;
}

.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.write-box {
  border: none;
  width: 93%;
  height: 100px;
  margin: auto;
  display: block;
  outline: none;
}
</style>