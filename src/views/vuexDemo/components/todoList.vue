<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <li
        v-for="item in $store.state.list"
        :key="item.id"
        :class="{ complete: item.done, editing: item.id == editId }"
      >
        <div class="view">
          <input
            class="toggle"
            type="checkbox"
            :checked="item.done"
            @input="changeState(item.id)"
          />
          <label @dblclick="showEdit(item.id)">{{ item.name }}</label>
          <button class="destroy" @click="delTodo(item.id)"></button>
        </div>
        <input class="edit" :value="item.name" @keyup.enter="hideEdit" />
      </li>
    </ul>
  </section>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      editId: -1
    };
  },
  methods: {
    //辅助函数映射=>mutations
    ...mapMutations(["delTodo", "updateTodo", "changeState"]),
    //辅助函数从命名方法
    ...mapMutations({
      deltodo: "delTodo",
      changestate: "changeState"
    }),
    //辅助函数映射actions
    ...mapActions(["asyncDelTodo"]),
    //删除任务
    delTodo(id) {
      this.asyncDelTodo({ id });
    },
    //显示编辑状态
    showEdit(id) {
      this.editId = id;
    },
    hideEdit(e) {
      this.updateTodo({
        id: this.editId,
        name: e.target.value
      });
      this.editId = -1;
    },
    //修改状态
    changeState(id) {
      this.changestate({ id });
    }
  }
};
</script>

<style></style>
