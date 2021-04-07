<template>
    <div class="post">
        <template>
            <div class="center">
                <vs-alert :hidden-content.sync="hidden">
                    <template #title>
                        Welcome to Posts!
                    </template>
                    <h4>Hello friendly user!</h4> This is the posts page! This page will allow you to view jobs and interesting career paths as well as view the recent posts of the people that you follow! When you have reached the end of the recent posts of the accounts that you follow, recommended accounts and posts will appear at the end of your feed. You can save a post if you are interested in the short description it shows on your main feed. If the caption has captured your attention simply click the "click for more" button to read more information about that specific listing. To view an account you are interested in, click the username or profile image of that account and it will take you directly to their main page! To save a post, simply click the heart button this way you will be able to view it later from your profile page. The numbers next to the hearts allow you to see how many other people are interested in that same listing! Welcome to the wonderful world of developers!
                </vs-alert>
            </div>
        </template>
            <br>
                <hr>
            <br>
        <template>
            <div class="center grid">
                <vs-row justify='center'>
                    <vs-card type="4">
                        <template #title>
                                <div class="con-avatars">
                                    <vs-avatar>
                                        <img src="https://thispersondoesnotexist.com/image" >
                                    </vs-avatar>
                                    <h3>First Day on the Team!</h3>
                                </div>
                        </template>
                        <template #img>
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.93naQmchp_82427Q7IkjtQHaE7%26pid%3DApi&f=1" alt="">
                        </template>
                        <template #text>
                            <p>
                                <em>Post by: @alex-carvari </em> 
                                Lorem ipsum dolor sit amet consectetur...
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
                    <template>
                        <div class="center">
                            <vs-button
                                flat
                                :active="active == 0"
                                @click="active = 0"
                            >
                                Click for more
                            </vs-button>
                        </div>
                    </template>
                    <vs-card>
                        <template #title>
                            <template>
                                <div class="center con-avatars">
                                    <vs-avatar>
                                        <img src="https://thispersondoesnotexist.com/image" >
                                    </vs-avatar>
                                    <h3>Front-end Dev. Job Offer!</h3>
                                </div>
                            </template>
                        </template>
                        <template #img>
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7096%2Fpeople-woman-coffee-meeting.jpg%3Fcs%3Dsrgb%26dl%3Dpeople-coffee-working-7096.jpg%26fm%3Djpg&f=1&nofb=1" alt="">
                        </template>
                        <template #text>
                            <p>
                                <em>Post by: @clark-smith </em> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam fuga ut beatae accusantium culpa placeat odit quas, facere adipisci ratione magni ipsa fugit iure quis...
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
                    <template>
                        <div class="center">
                            <vs-button
                                flat
                                :active="active == 0"
                                @click="active = 0"
                            >
                                Click for more
                            </vs-button>
                        </div>
                    </template>
                    <br>
                        <hr>
                    <br>
                    <template>
                        <vs-alert :hidden-content.sync="hidden">
                            <template #title>
                                Recommended
                            </template>
                        <h4> Welcome to the Recommended Section!</h4> You have reached the end of your following page and you will now see posts that are recommended to you based on who you folow and what posts you've previously saved. Posts in the Recommended Section work a little differently from your main feed. Posts are grouped together by account. This means that you can view multiple posts from the same account at once without ever leaving your feed! Check it out! 
                        </vs-alert>
                    </template>
                    <!--
                        <vs-card-group>
                        <vs-card v-for="card in 6" @click="hangleClick">
                            <template #title>
                                <h3>Pot with a plant</h3>
                            </template>
                            <template #img>
                                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7096%2Fpeople-woman-coffee-meeting.jpg%3Fcs%3Dsrgb%26dl%3Dpeople-coffee-working-7096.jpg%26fm%3Djpg&f=1&nofb=1" alt="">
                            </template>
                            <template #text>
                                <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
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
                    </vs-card-group>
                    -->
                </vs-row>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        data:() => ({
        hidden: true
    })
    }
</script>