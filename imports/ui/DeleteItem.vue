<template>
  <div class="modal">
    <div class="modal-header">
      <h4 class="modal-title">删除Item</h4>
    </div>
    <div class="modal-body">
      <p>确认删除吗？</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="$emit('close')">取消</button>
      <button type="button" class="btn btn-primary" @click="removeMessage(id)">删除</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "delete-item",
    props:['id'],
    methods:{
      removeMessage(_id) {
        Meteor.call('removeMessage', _id);
      },

    }
  }
</script>

<style scoped>

</style>