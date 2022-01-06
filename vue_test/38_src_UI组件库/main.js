// 引入Vue
import Vue from 'vue'
// 引入app
import App from './App.vue'

// 按需引入
import { Button,Row,DatePicker } from 'element-ui';

// 完整应用
// 引入ElementUI组件库
// import ElementUI from 'element-ui';
// // 引入ElementUI的全部样式
// import 'element-ui/lib/theme-chalk/index.css';
// 关闭Vue的生产提示
Vue.config.productionTip = false;

// 底下的name属性保存的是使用时候的标签名
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);



// Vue.use(ElementUI);
// 创建vm
new Vue({
    el:'#app',
    render: h => h(App)
})