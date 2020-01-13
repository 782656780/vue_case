export default {
  data() {
    return {
      // v-text
      vText: "v-text",
      // v-html
      vHtml: "<div>哈哈哈</div>",
      // v-for
      vForOne: ["数组1", "数组2"],
      vForTwo: [{ value: "对象1" }, { value: "对象2" }],
      // v-model
      vModel: "",
      // v-if else
      vifelse: true,
      vshow: true,
      // v-pre &once
      preonce: "PerOnce"
    };
  },
  methods: {
    // v-on
    vOn(val) {
      this.$message(val.srcElement.innerText);
    },
    // v-on
    vIfElse() {
      this.vifelse = !this.vifelse;
    },
    // v-on
    vShow() {
      this.vshow = !this.vshow;
    }
  }
};
