<template>
  <div :class="$style.banxin">
    <slot></slot>
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
}
</style>
