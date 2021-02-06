<template>
  <ion-card>
    <ion-grid>
      <ion-row>
        <ion-col>
          <ion-card-header>
            <ion-card-subtitle>Posted by: {{ uinfo }}</ion-card-subtitle>
            <ion-card-title>{{ title }}</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            {{ body }}
          </ion-card-content>
        </ion-col>
        <ion-col>
          <div class="imgContain">
            <ion-img :src="imgUrl" />
          </div>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-card>
</template>

<script>
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
export default {
  name: "UserPost",
  components: {
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
  },
  props: {
    uinfo: String,
    title: String,
    body: String,
    imgUrl: String,
  },
  setup() {
    imgUrl = "../fakePeople/man2.jpg";
  },
  methods: {},
};
</script>

<style>
ion-img {
  width: 5rem;
  height: auto;
  float: right;
}
.imgContain {
  width: 100%;
  align-content: center;
  justify-content: center;
}
</style>
