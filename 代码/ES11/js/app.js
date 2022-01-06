// import * as m1 from "./hello.js";
//获取元素
const btn = document.getElementById('btn');

btn.onclick = function(){
    // 动态引入，返回结果是一个promise对象，这个promise成功的值就是模块暴露的对象
    import('./hello.js').then(module => {
        module.hello();
    });
}