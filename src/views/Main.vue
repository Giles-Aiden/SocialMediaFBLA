<template>
  <div>
    <router-view />
    <vs-navbar id='nav' color='primary' fixed>
      <router-link :to="{ name: 'Main' , params: {id: 456} }" tag='vs-button' id='nb' color='danger'>Home</router-link>
      <router-link :to="{ name: 'Main' , params: {id: 456} }" tag='vs-button' id='nb'>Profile</router-link>
      <router-link to="/" tag='vs-button' id='nb'>Return</router-link>
    </vs-navbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => {
    return {
      uid:456,
    }
  }
})
</script>

<style lang='scss' scoped>
#nav {
  top: 90%;
  bottom: 0;
  border-radius: 1em 1em 0 0;
  box-shadow: 0 1em 1em 1em grey;
  padding: auto;
  margin: auto;
  #nb {
    background-color: red;
  }
}
</style>
