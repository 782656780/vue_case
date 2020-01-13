export default {
  data() {
    return {
      filters: 1,
      msg: "hellovue"
    };
  },
  filters: {
    filters(val) {
      if (val === 1) {
        return "filter过滤器one";
      } else {
        return "filter过滤器two";
      }
    }
  },
  // 生命周期
  // 创建前
  beforeCreate() {
    // 在初始化数据之前调用, vm中没有data中的数据
    console.warn("beforeCreate钩子函数");
    console.warn(this.msg);
  },
  // 创建后
  created() {
    // 在数据初始化后执行的钩子函数
    console.warn("created钩子函数");
    console.warn(this.msg);
  },
  // 载入前
  beforeMount() {
    // 在页面渲染之前， 此时DOM结构还没有渲染成对应的数据
    console.warn("beforeMount钩子函数");
    var div = document.getElementById("app");
    console.warn(div.innerHTML);
  },
  // 载入后
  mounted() {
    console.warn("mounted钩子函数");
    var div = document.getElementById("app");
    console.warn(div.innerHTML);
  },
  // 跟新前
  beforeUpdate() {
    // 在页面渲染之前， 此时DOM结构还没有渲染成对应的数据
    console.warn("beforeUpdate钩子函数");
    var div = document.getElementById("app");
    console.warn(div.innerHTML);
  },
  // 跟新后
  updated() {
    console.warn("updated钩子函数");
    var div = document.getElementById("app");
    console.warn(div.innerHTML);
  },
  // 销毁前
  beforeDestroy() {
    // 在页面渲染之前， 此时DOM结构还没有渲染成对应的数据
    console.warn("beforeDestroy钩子函数");
  },
  // 销毁后
  destroyed() {
    // 在页面渲染之前， 此时DOM结构还没有渲染成对应的数据
    console.warn("destoryed钩子函数");
  }
};
