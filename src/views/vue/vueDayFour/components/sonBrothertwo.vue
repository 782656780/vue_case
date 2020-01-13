<template>
  <div :class="$style.banxin">
    <div :class="$style.son">{{ brotherTwo }}</div>
    <div :class="$style.taking">
      <div>传递数据:</div>
      <el-button round @click="send">传给兄弟组件数据</el-button>
    </div>
  </div>
</template>
<script>
import middleWare from "./middleware.js";
export default {
  props: {
    brotherTwo: String
  },
  data() {
    return {
      // 给兄弟组件的数据
      brotheDate: "我是传递过来的数据"
    };
  },
  methods: {
    send() {
      middleWare.$emit("getbrother", this.brotheDate);
    }
  }
};
</script>
<style lang="scss" module>
.banxin {
  .son {
    height: 50px;
  }
  .taking {
    display: flex;
    justify-content: flex-start;
  }
}
</style>
