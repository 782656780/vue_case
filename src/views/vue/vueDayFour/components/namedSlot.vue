<template>
  <div :class="$style.banxin">
    <p :class="$style.big"><slot name="big"></slot></p>
    <p :class="$style.mini"><slot name="mini"></slot></p>
  </div>
</template>
<script>
export default {
  props: {
    brotherTwo: String
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" module>
.banxin {
  height: 30px;
  .big {
    font-size: 30px;
  }
  .mini {
    font-size: 20px;
  }
}
</style>
