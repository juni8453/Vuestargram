<template>
  <div>
    <div v-for="(post, i) in posts" :key="i">
      <Post :post="post"/>
    </div>
  </div>
</template>

<script>
import Post from './Post.vue'

export default {
  name: "Container",
  components: {
    Post : Post,
  },
  props: {
    posts: Array
  },
}
</script>

<style>

</style>