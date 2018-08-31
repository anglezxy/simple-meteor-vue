<template>
  <div class="chat">
    <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="enter new message"/>
    <div v-if="!$subReady.messages">
      loading....
    </div>
    <todo-list :todos="messages"></todo-list>
  </div>
</template>

<script>
  import { Messages } from '../api/message/collections.js';
  import TodoList from './TodoList.vue';

  /*const test = {
    meteor: {
      subscribe: {
        'messages': [],
      },
      messages() {
        return Messages.find({}, { sort: { date: -1 } });
      },
    }
  };*/
  export default {
    name: "Chat",
    // mixin: [test],
    data() {
      return {
        newMessage: '',
        //messages: [],
      }
    },
    components: {
      TodoList,
    },
    meteor: {
      $subscribe: {
        'messages': [],
      },
      messages() {
        return Messages.find({}, { sort: { date: -1 } });
      }
    },
    methods: {
      sendMessage() {
        Meteor.call('addMessage', this.newMessage);
        this.newMessage = '';
      },



    },

  }
</script>

<style scoped>
  .chat {
    max-width: 300px;
  }

  input {
    width: 100%;
    box-sizing: border-box;
    padding: 6px 12px;
    border: solid 1px #ccc;
    border-radius: 3px;
    margin-bottom: 4px;
  }

  .message {
    margin: 4px 2px;
    display: flex;
    flex-direction: row;
  }

  .message .content {
    flex: auto 1 1;
  }
</style>