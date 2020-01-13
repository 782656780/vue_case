<template>
  <el-container :class="$style.container">
    <!-- 头部 -->
    <el-header :class="$style.header">
      <div :class="$style.header_title">DEMO</div>
    </el-header>
    <!-- 中部 -->
    <el-container :class="$style.center">
      <!-- 侧边 -->
      <el-aside :class="$style.center_aside" style="width: 200px;">
        <!-- 滚动 -->
        <el-scrollbar style="height:100%">
          <!-- 侧边栏 -->
          <el-menu
            :default-active="$route.path"
            active-text-color="#303F9F"
            background-color="#FF9800"
            router
            class="el-menu-vertical-demo"
          >
            <template v-for="(item, index) in routers">
              <el-submenu
                :index="'' + (index + 1)"
                :key="index"
                v-if="item.childmenu.length"
              >
                <template slot="title">
                  <div :class="$style.menu_name">
                    <!-- <i class="el-icon-menu"></i> -->
                    <img :src="item.icon" style="margin-right: 6px;" alt />
                    <span>{{ item.menuname }}</span>
                  </div>
                </template>
                <template v-for="(el, subIndex) in item.childmenu">
                  <el-submenu
                    :index="
                      el.childmenu.length
                        ? `${index}-${subIndex}`
                        : '/' + item.menucode
                    "
                    v-if="el.childmenu.length"
                    :key="`${index}-${subIndex}`"
                  >
                    <template slot="title">{{ el.menuname }}</template>
                    <el-menu-item
                      :index="'/' + items.menucode"
                      v-for="(items, index) in el.childmenu"
                      :key="index"
                      >{{ items.menuname }}</el-menu-item
                    >
                  </el-submenu>
                  <el-menu-item
                    :index="'/' + el.menucode"
                    :key="`${index}-${subIndex}`"
                    v-else
                  >
                    <span>{{ el.menuname }}</span>
                  </el-menu-item>
                </template>
              </el-submenu>
              <el-menu-item
                :index="'/' + item.menucode"
                :class="$style.menu_name"
                v-else
                :key="index"
              >
                <!-- <i class="el-icon-menu"></i> -->
                <img :src="item.icon" style="margin-right: 6px;" alt />
                <span>{{ item.menuname }}</span>
              </el-menu-item>
            </template>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <!-- 显示 -->
      <el-main :class="$style.center_main">
        <keep-alive include="vueDayOne">
          <router-view style="flex-grow: 1;"></router-view>
        </keep-alive>
      </el-main>
    </el-container>
    <!-- 底部 -->
    <el-footer :class="$style.footer"></el-footer>
  </el-container>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      routers: [
        {
          menuname: "vue基础",
          menucode: "",
          icon: require("@/assets/home.svg"),
          childmenu: [
            {
              icon: "",
              menuname: "vue第一天",
              menucode: "vueDayOne",
              childmenu: []
            },
            {
              icon: "",
              menuname: "vue第二天",
              menucode: "vueDayTwo",
              childmenu: []
            },
            {
              icon: "",
              menuname: "vue第三天",
              menucode: "vueDayThree",
              childmenu: []
            },
            {
              icon: "",
              menuname: "vue第四天",
              menucode: "vueDayFour",
              childmenu: []
            }
          ]
        },
        {
          menuname: "vuex基础",
          menucode: "",
          icon: require("@/assets/home.svg"),
          childmenu: [
            {
              icon: "",
              menuname: "vuex的Todo案例",
              menucode: "vuexDemo",
              childmenu: []
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen() {},
    handleClose() {}
  }
};
</script>
<style lang="scss" module>
.container {
  height: 100%;
  .header {
    background-color: #455a64;
    .header_title {
      text-align: center;
      height: 100%;
      line-height: 61px;
      font-size: 40px;
    }
  }
  .center {
    .center_aside {
      background-color: #212121;
    }
    .center_main {
      // background-color: #757575;
    }
  }
  .footer {
    background-color: #455a64;
  }
}
</style>
