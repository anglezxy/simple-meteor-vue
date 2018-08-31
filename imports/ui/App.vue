<template>

  <div class="app">
    <div v-blaze="'loginButtons'"></div>
    <p v-if="user">
      you are logged in as <b>{{user.username}}</b>
    </p>
    <chat></chat>
  </div>
</template>

<script>
  import Chat from "./Chat";

  export default {
    data() {
      return {
       user: null,
      };
    },
    // meteor: {
    //   data: {
    //     user() {
    //       return Meteor.user();
    //     },
    //   }
    // },
    name: "App",
    components: { Chat }
  }
</script>

<style scoped>

</style>