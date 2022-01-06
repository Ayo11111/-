// 引入Vue
import Vue from 'vue'
// 引入app
import App from './App.vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引用路由器
import router from './router'
// 关闭Vue的生产提示
Vue.config.productionTip = false;

//应用vue-router插件
Vue.use(VueRouter)




// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    router,
})