<template>
  <div>
    <div class="message" v-for="msg in todos">
      <span class="content">{{ msg.message }}</span>
      <button @click="deleteItem(`${msg._id}`)">x</button>
      <!--<delete-item  v-show="isShow" :id="`${msg._id}`" ></delete-item>-->
    </div>

  </div>
</template>

<script>
  import DeleteItem from './DeleteItem.vue';
  export default {
    name: "todo-list",
    props: ['todos'],
    components:{ DeleteItem, },
    data(){
      return {
        isShow:false,
        id:0,
      }
    },
    methods:{
      deleteItem(id){
        this.$modal.show(DeleteItem,{id: id},{
          width: 400,
          pivotY: 0.3,
          height: 'auto',
        });
      }
    }
  }
</script>

<style scoped>

</style>