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
              <ion-grid>

                <ion-row>
                  <ion-col>
                    <div><h1>Career Field</h1></div>

                     <ion-card>
                      <ion-card-header>
                        <ion-card-title>Jobs: current and previous</ion-card-title>
                        <ion-card-subtitle>*include current interests*</ion-card-subtitle>
                      </ion-card-header>

                      <ion-card-content>
                        Keep close to Nature's heart... and break clear away, once in awhile,
                        and climb a mountain or spend a week in the woods. Wash your spirit clean.
                      </ion-card-content>
                    </ion-card>
                  <ion-fab>
                    <ion-fab-button>
                      <ion-icon>
                    </ion-fab-button>
                  </ion-fab>
                  </ion-col>
                  <ion-col>

                    <div><h1>Qualifications</h1></div>


                     <ion-card>
                      <ion-card-header>
                        <ion-card-title>Education</ion-card-title>
                        <ion-card-subtitle>*include certifications*</ion-card-subtitle>
                      </ion-card-header>

                      <ion-card-content>
                        Keep close to Nature's heart... and break clear away, once in awhile,
                        and climb a mountain or spend a week in the woods. Wash your spirit clean.
                      </ion-card-content>
                    </ion-card>
                  </ion-col>
                </ion-row>

              </ion-grid>
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
