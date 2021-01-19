<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Profile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-avatar id='profile_pic'>
              <img src="https://image.freepik.com/free-icon/profile-user-outline_318-36611.png">
            </ion-avatar>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<!--  ------------------------ -->

<script>
import { IonPage, IonAvatar, IonGrid, IonRow, IonCol, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default  {
  name: 'Profile',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonAvatar, IonPage }
}
</script>

<!--  ------------------------ -->

<style>
  ion-grid {
    display: flex;
    justify-content: center;
  }
  #profile_pic {
    width: 100%;
    height: auto;
    padding: 10%;
  }
</style>
