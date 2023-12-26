<template>
  <div>
    <div>
      <div v-if="step === 0">
        <Post v-for="(post, i) in posts" :key="i"
              :post="post"
              :postIndex="i"
              :step="step"
        />
      </div>

      <div v-if="step === 1">
        <div :class="filterName" class="upload-image" :style="{ backgroundImage: `url(${fileUrl})` }"></div>
        <div class="filters">
          <FilterBox v-for="(filter, i) in filters" :key="i"
                     :fileUrl="fileUrl"
                     :filter= "filter" />
        </div>
      </div>

      <div v-if="step === 2">
        <div :class="filterName" class="upload-image" :style="{ backgroundImage: `url(${fileUrl})` }"></div>
        <div class="write">
          <textarea @input="$emit('writePost', $event.target.value)"
                    class="write-box">내용을 입력하세요.</textarea>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Post from './Post.vue'
import FilterBox from './FilterBox.vue'

export default {
  name: "Container",
  components: {
    Post: Post,
    FilterBox: FilterBox,
  },
  props: {
    posts: Array,
    step: Number,
    fileUrl: String,
    filters: Array,
    filterName: String,
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

.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
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