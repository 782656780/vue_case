import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 抽离 state
const state = {
  list: [{ id: 1, name: "案例", done: true }]
};
// 抽离 mutations
const mutations = {
  // 添加任务
  addTodo(state, payload) {
    const id =
      state.list.length === 0 ? 1 : state.list[state.list.length - 1].id + 1;
    state.list.push({
      id,
      name: payload.name,
      done: false
    });
  },
  // 删除任务
  delTodo(state, payload) {
    // 过滤出没有这个id的所有数据
    state.list = state.list.filter(item => item.id != payload.id);
  },
  //修改状态
  changeState(state, payload) {
    //根据id获取到当前任务
    let todo = state.list.find(item => item.id == payload.id);
    todo.done = !todo.done;
  },
  //修改任务状态
  updateTodo(state, payload) {
    let todo = state.list.find(item => item.id == payload.id);
    todo.name = payload.name;
  },
  //清除完成
  clearCompleted(state) {
    //过滤出为完成的,重新赋值list
    state.list = state.list.filter(item => !item.done);
  }
};
//抽离 getters(计算属性)
const getters = {
  //底部的显示和隐藏
  isFooterShow(state) {
    return state.list.length > 0;
  },
  //剩余未完成的个数
  itemLeftCount(state) {
    return state.list.filter(item => !item.done).length;
  },
  //clearCompleted 的显示与隐藏
  isClearCompletedShow(state) {
    return state.list.some(item => item.done);
  }
};
// 抽离 actions
const actions = {
  //参数context 类似store
  asyncDelTodo(context, payload) {
    setTimeout(() => {
      context.commit("delTodo", payload);
    });
  }
};

// 实例化 仓库
const store = new Vuex.Store({
  //严格模式
  strict: true,
  state,
  mutations,
  getters,
  actions
});
export default store;
