export default {
  name: "login",
  data() {
    return {
      loginFrom: {
        loginName: "登录",
        headPortrait:
          "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        fits: "fill",
        userName: "jiyuanwang",
        passWord: "123456"
      }
    };
  },
  mounted() {},
  methods: {
    Login() {
      if (
        this.loginFrom.userName == "jiyuanwang" &&
        this.loginFrom.passWord == "123456"
      ) {
        //登录成功
        console.log("登录成功");
        this.$router.replace({ name: "home" });
      } else {
        //
      }
    }
  }
};
