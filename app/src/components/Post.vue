<template>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>Posted by: {{ uinfo }}</ion-card-subtitle>
      <ion-card-title>{{ title }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      {{ body }}
      <ion-img :src="imgUrl" />
    </ion-card-content>
  </ion-card>
</template>

<script>
  
  export default {
    name: 'UserPost',
    props: {
      uinfo: String,
      title: String,
      body: String,
      imgUrl: String
    }
  }

</script>

<style>
  ion-img {
    width: 5rem;
    height: auto;
    float: right;
  }
</style>
