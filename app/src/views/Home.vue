<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>

      <ion-list>
        <ion-item v-for='item in items' :key='item'>
          <p>{{ item }}</p>
        </ion-item>
      </ion-list>

      <ion-infinite-scroll
      @ionInfinite="loadData($event)" 
      threshold="10%" 
      id="infinite-scroll">
        <ion-infinite-scroll-content
          loading-spinner="bubbles"
          loading-text="Loading more data...">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>

    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default {
  name: 'Tab2',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  data() {
    return {
      items: [1,2,3,4,5,6,7,8,9,10],
      itemNum: 11,
    }
  },
  methods: {
    loadData(event) {
      setTimeout(() => {
        console.log('requesting more items');
        this.addMoreItems();
        event.target.complete();
      }, 500);
    },
    addMoreItems() {
      let itt = this.itemNum;
      for (let i=itt; i<itt+10; i++) {
        this.items.push(i);
        this.itemNum++;
      }
    },
  },
}
</script>
