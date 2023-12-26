<template>
  <div :class="filter + ' filter-item'" :style="{backgroundImage : `url(${fileUrl})`}"></div>
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    fileUrl: String,
    filter: String,
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

</style>