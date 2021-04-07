<template>
  <div>
    <vs-alert color="#7d33ff" flat>
      <template #title>
        <h1>Alex Weber:</h1>
      </template>
      <div class='text'>
        <h1>Posts: 217</h1>
        <h2>Likes: 20,714</h2>
        <h2>Comments: 271</h2>
        <h2>Tags: 25</h2>
      </div>
    </vs-alert>
    <Msg />
  </div>
</template>

<script>
import Msg from '@/components/Msg.vue';
export default {
  components: {
    Msg,
  },
}
</script>
<style lang="scss" scoped>
vs-alert {
  .text{
    font-size: large;
  }
}
</style>