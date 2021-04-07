<template>
  <div class="post">
    <template>
        <div class="center grid">
            <vs-row justify='center'>
                <vs-card type="3">
                    <template #title>
                        <template>
                            <div class="center con-avatars">
                                <vs-avatar>
                                    <img src="https://thispersondoesnotexist.com/image" >
                                </vs-avatar>
                                <h3>First Day on the Team!</h3>
                            </div>
                        </template>
                    </template>
                    <template #img>
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.93naQmchp_82427Q7IkjtQHaE7%26pid%3DApi&f=1" alt="">
                    </template>
                    <template #text>
                        <p>
                            <em>Post by: @alex-carvari </em> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam fuga ut beatae accusantium culpa placeat odit quas, facere adipisci ratione magni ipsa fugit iure quis!
                        </p>
                    </template>
                    <template #interactions>
                        <vs-button danger icon>
                            <i class='bx bx-heart'></i>
                        </vs-button>
                        <vs-button class="btn-chat" shadow primary>
                            <i class='bx bx-chat' ></i>
                            <span class="span">
                            54
                            </span>
                        </vs-button>
                    </template>
                </vs-card>
            </vs-row>
        </div>
    </template>
  </div>
</template>

