<!--  -->
<template>
  <footer class="footer">
    <div class="todo-left">
      <span>已完成</span>
      {{ count }}
      <span>项；</span>
      <span>共</span>
      <strong class="ml22">{{ todos.length }}</strong>
      <span>项</span>
    </div>
    <!-- <ul class="filters">
      <a-button @click="changeTab(1)">全部</a-button>
      <a-button @click="changeTab(2)">待完成</a-button>
      <a-button @click="changeTab(3)">已完成</a-button>
    </ul> -->
    <div class="todo-right"></div>
  </footer>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { Button } from 'ant-design-vue';
//引入接口
import { Todo } from "../types/todo";



export default defineComponent({
  name: "DownFooter",
  props: {
    todos: {
      type: Array as () => Todo[],
      required: true,
    },
    changeSel: {
      type: Function,
      required: true,
    },
    
  },
  setup(props) {
 
    const count = computed(() => {
      // reduce累加
      return props.todos.reduce(
        (pre, todo, index) => pre + (todo.isCompleted ? 1 : 0),
        0
      );
    });


  function changeTab(val:number) {
    props.changeSel(val);
  }
 
    return {
      count,
      changeTab
    };
  },
});
</script>
<style scoped></style>
