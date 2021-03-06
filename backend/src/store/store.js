import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);
Vue.use(axios);
/**
 * Vuex全局状态管理
 * @param options {Array} 用于渲染tabs的数组
 */
const store = new Vuex.Store({
  state: {
      options: [],//新开tab集合
      activeIndex: '/home',//默认首页
      userInfo: {},//当前登陆人信息
      menuCode:'',//菜单code 查询按钮时用到
      menuCodeList:{},////目的是为了浏览器返回时查询按钮的menucode发生改变 bycwg
      // access_token:'',//登陆成功返回
      // refresh_token:'',//登陆成功返回
      menuList:[],//当前menu列表集合
      refreshFlag:false,//是否刷新的标记
      // url:'http://10.1.252.14:8080/',//服务请求路径//192.168.1.147  166  119
      // url:'http://j162m60587.51mypc.cn/',//服务请求路径//192.168.1.147  166  119

       url:'http://39.105.73.110:8080',//服务请求路径//192.168.1.147  166  119

      // url:'http://172.22.2.183:8081/',//服务请求路径//192.168.1.147  166  119
      //  url:'http://106.14.220.218:8080',//服务请求路径//192.168.1.147  166  119
      //  url:'http://192.168.43.129:8081/',//服务请求路径//192.168.1.147  166  119
     
      //getButtonUrl:'http://10.1.252.14:8080/webauth/role/getRoleMenuButton',//每个页面获取按钮
      getButtonUrl:'http://j162m60587.51mypc.cn/webauth/role/getRoleMenuButton',//每个页面获取按钮
  },
  
  mutations: {
    toLogin(){//公共方法 每个组件可直接调用
      sessionStorage.removeItem('ms_username')
       window.location.href='http://localhost:8088/#/login'
    },
    // 添加tabs
    add_tabs (state, data) {
      this.state.options.push(data);
    },
    // 删除tabs
    delete_tabs (state, route) {
      let index = 0;
      for (let option of state.options) {
        if (option.index === route) {
          break;
        }
        index++;
      }
      this.state.options.splice(index, 1);
    },
    // 设置当前激活的tab
    set_active_index (state, index) {
      this.state.activeIndex = index;
    },
  }
});

export default store;