<template>
  <div class='center grid'>
  <hr>
    <vs-row justify='center'>
        <vs-card type="5">
          <template #title>
            <h3>Alex Weber</h3>
          </template>
          <template #img>
            <img src="https://thispersondoesnotexist.com/image" alt="">
          </template>
          <template #text>
            <p>
              Hey man! Long time no see!
            </p>
          </template>
          <template #interactions>
            <vs-button danger icon>
              <i class='bx bx-heart'></i>
            </vs-button>
            <vs-button class="btn-chat" shadow primary>
              <i class='bx bx-chat' ></i>
              <span class="span">
                1
              </span>
            </vs-button>
          </template>
        </vs-card>
    </vs-row>
  </div>
</template>

<script>
  export default {
    name: "Msg",
    props: {
      msg: String,
    },
  };
</script>

<style lang="scss" scoped>
  h1{
    color:red;
  }
</style>