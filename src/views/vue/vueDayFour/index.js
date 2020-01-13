import sonBrotherone from "./components/sonBrotherone.vue";
import sonBrothertwo from "./components/sonBrothertwo.vue";
import anonymousSlot from "./components/anonymousSlot.vue";
import namedSlot from "./components/namedSlot.vue";
export default {
  data() {
    return {
      son: {
        brotherone: "子组件一",
        brothertwo: "子组件二"
      },
      myData: {
        name: "",
        age: ""
      },
      sontowName: "",
      // 控制组件显示和隐藏
      componentId: "anonymous_slot"
    };
  },
  methods: {
    getMy(value) {
      this.myData.name = value.name;
      this.myData.age = value.age;
    },
    getSontowName() {
      this.sontowName = this.$refs.referenceName.brotherTwo;
    }
  },
  components: {
    son_brotherone: sonBrotherone,
    son_brothertwo: sonBrothertwo,
    anonymous_slot: anonymousSlot,
    named_slot: namedSlot
  }
};
