export default {
  data() {
    return {
      simpleWatcha: "呵呵呵",
      complexWatcha: {
        color: "red",
        name: "标本"
      },
      numbertable: {
        numnone: 1,
        numtwo: 1
      },
      fulllNames: {
        firstName: "高",
        lastName: "鸣军"
      },
      directive: ""
    };
  },
  watch: {
    // watch是简单的形式
    simpleWatch(newVal, oldVal) {
      this.simpleWatcha = newVal;
      console.log(newVal, oldVal);
    },
    // watch是复杂的形式
    complexWatch: {
      handler(value) {
        if (value != undefined) {
          this.complexWatcha.color = value;
        }
      },
      // 监听对象的时候需要制定deep为true
      deep: true,
      // 页面加载,会立即监听一次
      immediate: true
    }
  },
  // computed计算属性
  computed: {
    tatolnum() {
      return this.numbertable.numnone + this.numbertable.numtwo;
    },
    fullName: {
      get() {
        return this.fulllNames.firstName + " " + this.fulllNames.lastName;
      },
      set(value) {
        this.fulllNames.firstName = value.split("")[0];
        this.fulllNames.lastName = value.split("")[1];
      }
    }
  },
  // 指令
  directives: {
    color: {
      // 指令第一次绑定到元素时调用
      bind() {},
      // 指定所在元素插入到父元素中的时候执行(渲染时)
      inserted(el, binding) {
        el.style.color = binding.value;
      },
      // 当指令的值发生改变的时候执行
      update() {},
      // 当所有在组件全部跟新的时候调用
      componentUpdated() {},
      // 当指令与元素解绑的时候触发
      unbind() {}
    }
  },
  methods: {
    // 简单
    simpleWatchs() {
      this.simpleWatcha = "123123";
    },
    // 复杂
    complexWatchs() {
      this.complexWatcha.color = "green";
    }
  }
};
