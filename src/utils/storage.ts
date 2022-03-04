import { Todo } from "../types/todo";

// 保存
export function saveTodoData(todos: Todo[]){
    localStorage.setItem('todo_data', JSON.stringify(todos))
}
// 读取
export function getTodoData(): Todo[]{
    return  JSON.parse(localStorage.getItem('todo_data') || '[]')
} 