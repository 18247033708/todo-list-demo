<!--  -->
<template>
  <li
    :data-id="todo.id"
    class="todo dads-children"
    :class="{'completed':isCheck}"
    @mouseenter="mouseHandler(true)"
    @mouseleave="mouseHandler(false)"
    :style="{backgroundColor:bgColor,color:fontColor}"
  >
    <div class="view">
      <input class="toggle" type="checkbox" v-model="isCheck" />
      <label >{{ todo.title }}</label>
     <!-- 删除 -->
      <a-popconfirm
        title="确定删除吗?"
        ok-text="确定"
        cancel-text="取消"
        @confirm="confirm"
    >  
      <button class="destroy"></button>
    </a-popconfirm>


      <!-- <span class="todo-drag dad-draggable-area">
        <span style="font-family: Comic Sans MS; font-size: 14px">
          <span class="menu-icon"></span>
        </span>
      </span>  -->


    </div>
    <input class="edit" value="4" />
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, isRef, ref, watch } from "vue";
import { Todo } from "../types/todo";
import { Popconfirm } from 'ant-design-vue';

export default defineComponent({
  name: "",
  props: {
    todo: {
        type: Object as () => Todo,
        required: true,
    },
    deleteTodo: {
        type: Function,
        required: true,
    },
    updateTodo: {
        type: Function,
        required: true,
    },
    index: {
        type: Number,
        required: true,
    },
    is_selected: {
        type: Number,
        required: true,
    },
  },
  setup(props) {
    // 当前tab 1全部 2待完成 3已完成
    console.log(isRef(props.is_selected));
    console.log('ww',props.is_selected);

    const bgColor = ref("#fff");
    const fontColor = ref("#4d4d4d");

    // 鼠标滑过,加个颜色
    const mouseHandler = (flag: boolean) => {
      if (flag) {
        bgColor.value = "#eee";
        fontColor.value = "#000";
      } else {
        bgColor.value = "#fff";
        fontColor.value = "#4d4d4d";
      }
    };

     // 删除当前元素
    const confirm = ()  => {
      props.deleteTodo(props.index);
    };


    // 复选框选中，样式更改
    const isCheck = computed({
        get(){
            return props.todo.isCompleted
        },
        set(val){
            props.updateTodo(props.todo, val)
        }
    })

    return {
      mouseHandler,
      confirm,
      bgColor,
      fontColor,
      isCheck
    };
  },
});
</script>
<style scoped></style>
