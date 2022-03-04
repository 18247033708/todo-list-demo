<!--  -->
<template>
  <header class="header">
    <h1>Todos-demo</h1>
    <input
      class="new-todo"
      placeholder="请输入待办事项"
      autofocus=""
      v-model="title"
      @keyup.enter="addData"
    />
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "HeaderTop",
  props: {
    addTodo: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const title = ref("");
    // 添加数据
    const addData = () => {
      const text = title.value;
      if (!text) return;

      const todo = {
        id: Date.now(),
        title: text,
        isCompleted: false,
        isshow: true,
      };
      props.addTodo(todo); 

      title.value = "";
    };

    return {
      title,
      addData,
    };
  },
});
</script>
<style scoped></style>
