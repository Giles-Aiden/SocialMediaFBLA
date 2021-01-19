<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/profile">
          <ion-icon :icon="person" />
          <ion-label>Profile</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/home">
          <ion-icon :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/messages">
          <ion-icon :icon="mail" />
          <ion-label>Messages</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { home, mail, person } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      home, 
      mail, 
      person,
    }
  }
}
</script>
