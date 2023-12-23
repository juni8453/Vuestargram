<template>
  <div class="post">
    <div class="post-header">
      <div class="profile" :style="{ backgroundImage: `url(${post.userImage})` }"></div>
      <span class="profile-name">{{ post.name }}</span>
    </div>
    <!-- CSS 속성에 데이터 바인딩을 위해 콜론 사용 -->
    <!-- 오브젝트 자료형을 활용해 { CSS 속성 : '' } 로 편리하게 사용 가능 -->
    <!-- 문자 중간에 변수 바인딩이 필요하면 `${ 변수 }` 로 활용가능 -->
    <div class="post-body" :style="{ backgroundImage :`url(${post.postImage})`}"></div>
    <div class="post-content">
      <p>{{ post.likes }}</p>
      <p><strong>{{ post.name }}</strong> {{ post.content }}</p>
      <p class="date">{{ post.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: Object,
  },
}
</script>

<style>
.post {
  width: 100%;
}

.profile {
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}

.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}

.post-header {
  height: 30px;
  padding: 10px;
}

.post-body {
  height: 450px;
  max-width: 100%;
  background-position: center;
  background-size: cover;
  margin: 20px;
}

.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}

.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}

</style>