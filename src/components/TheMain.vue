<!--  -->
<template>
   <section class="main" style="">
      <input id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list dad-active dad-container" id="todo-list">
          <ItemLi v-for="(todo,index) in todos" :key="todo.id" :todo="todo" :index="index" :deleteTodo="deleteTodo" :updateTodo="updateTodo" :is_selected="is_selected"/>
      </ul>
    </section>

   
</template>

<script lang='ts'>
import { defineComponent} from 'vue'
import ItemLi from "./ItemLi.vue";
export default defineComponent({
    name: 'CenterMain',
    components:{ ItemLi },
    props:['todos','deleteTodo','updateTodo','is_selected']
  });
</script>
<style scoped>
</style>