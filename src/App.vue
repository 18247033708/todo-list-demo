
<template>
  <section class="todoapp">
    <!-- 输入框 -->
    <TheHeader :addTodo="addTodo" />

    <!-- list -->
    <TheMain :todos="todos" :deleteTodo="deleteTodo"  :updateTodo="updateTodo" :is_selected="is_selected" />

    <!-- 其他操作 -->
    <TheFooter :todos="todos"  :changeSel="changeSel" />

  </section>
</template>

<script lang="ts">
import { reactive, toRefs, ref, provide, watch, onMounted } from "vue";
import TheHeader from "./components/TheHeader.vue";
import TheMain from "./components/TheMain.vue";
import TheFooter from "./components/TheFooter.vue";
//引入接口
import { Todo } from "./types/todo";
import { saveTodoData,getTodoData } from "./utils/storage";


export default {
  name: "App",
  components: {
    TheHeader,
    TheMain,
    TheFooter,
  },

  setup() {
    console.log("1-开始创建组件-setup");
    const data = reactive<{ todos: Todo[] }>({
      todos: [],
    });

    onMounted(()=>{
      // 从缓存读数据
      data.todos = getTodoData();
    })

    const refData = toRefs(data);

    // 添加数据
    const addTodo = (todo: Todo) => {
      data.todos.unshift(todo)
    }

    //删除数据
    const deleteTodo = (index:number) => {
      data.todos.splice(index,1);
    }

    //改变选中状态
    const updateTodo = (todo:Todo,isCompleted:boolean) => { 
      todo.isCompleted = isCompleted;
       console.log(todo);
    }

    //监视数据
    watch(()=> data.todos, saveTodoData , {deep:true})
    
    const is_selected = ref(1);
    
    //改变底部选中tab  
    const changeSel = (num:number) => { 
      is_selected.value = num;
    }


    return {
      ...refData,
      addTodo,
      deleteTodo,
      updateTodo,
      changeSel,
      is_selected,
    };
  },
};
</script>

<style>
@import "./assets/css/index.css";
</style>
