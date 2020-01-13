<template>
  <footer class="footer">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"
      ><strong>{{ itemLeftCount }}</strong> item left</span
    >

    <!-- Hidden if no completed items are left ↓ -->
    <button
      class="clear-completed"
      @click="clearCompleted"
      v-show="isClearCompletedShow"
    >
      Clear completed
    </button>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    clearCompleted() {
      this.$store.commit("clearCompleted");
    }
  },
  computed: {
    ...mapGetters(["isFooterShow", "itemLeftCount", "isClearCompletedShow"])
  }
};
</script>
