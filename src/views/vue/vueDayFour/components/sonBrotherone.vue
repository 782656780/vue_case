<template>
  <div :class="$style.banxin">
    <div :class="$style.son">
      <div :class="$style.son_name">{{ brotherOne }}</div>
      <el-button round @click="getFaterName">传给父组件数据</el-button>
    </div>
    <!-- 子数据 -->
    <div :class="$style.jie_date">{{ brotherDate }}</div>
  </div>
</template>
<script>
import middleWare from "./middleware.js";
export default {
  props: {
    brotherOne: String
  },
  data() {
    return {
      father: {
        name: "父组件",
        age: "12"
      },
      // 兄弟传递的数据
      brotherDate: ""
    };
  },
  methods: {
    getFaterName() {
      this.$emit("fatername", this.father);
    }
  },
  created() {
    middleWare.$on("getbrother", value => {
      this.brotherDate = value;
    });
  }
};
</script>
<style lang="scss" module>
.banxin {
  .son {
    height: 50px;
    display: flex;
    justify-content: flex-start;
    .son_name {
      height: 100%;
    }
  }
}
</style>
