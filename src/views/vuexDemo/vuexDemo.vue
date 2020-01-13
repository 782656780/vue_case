<template>
  <section class="todoapp">
    <todo_header></todo_header>
    <todo_list></todo_list>
    <todo_footer></todo_footer>
  </section>
</template>
<script>
import todoHeader from "./components/todoHeader.vue";
import todoList from "./components/todoList.vue";
import todoFooter from "./components/todoFooter.vue";

export default {
  name: "app",
  components: {
    todo_header: todoHeader,
    todo_list: todoList,
    todo_footer: todoFooter
  }
};
</script>
