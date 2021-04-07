<template>
  <div class="about">
    <Post />
  </div>
</template>

<script>
// @ is an alias to /src
import Post from "@/components/Post.vue";

export default {
  name: "Posts",
  components: {
    Post,
  },
};
</script>