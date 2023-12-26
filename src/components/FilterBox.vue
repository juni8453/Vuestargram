<template>
  <div :class="filter + ' filter-item'"
       :style="{backgroundImage : `url(${fileUrl})`}"
       @click="sendFilter"
  >
    <p class="filter-name">{{filter}}</p>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    fileUrl: String,
    filter: String,
  },
  methods: {
    // emitter 를 활용해 다른 컴포넌트로 이벤트 발사
    sendFilter() {
      this.emitter.emit('sendFilter', this.filter);
    }
  },
}
</script>

<style scoped>

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

.filter-name {
  color: white;
  font-size: small;
  margin-bottom: 0;
}

</style>