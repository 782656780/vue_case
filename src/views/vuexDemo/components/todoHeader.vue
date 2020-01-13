<template>
  <header class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      placeholder="What needs to be done?"
      autofocus
      @keyup.enter="addTodo"
      v-model="todoName"
    />
  </header>
</template>

<script>
// 第一步 引入
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      todoName: ""
    };
  },
  methods: {
    //方法辅助函数
    ...mapMutations(["addTodo"]),
    // 重命名
    ...mapMutations({
      addtodo: "addTodo"
    }),
    // 添加任务
    addTodo() {
      this.addtodo({
        name: this.todoName
      });
      this.todoName = "";
    }
  }
};
</script>

<style></style>
