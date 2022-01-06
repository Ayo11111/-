// 1.引入express
const { response } = require('express');
const express = require('express')

//2.创建应用对象
const app = express();

//3.创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')

    //设置响应体
    response.send('HELLO Ajax1')
});
app.post('/server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')

    //设置响应体
    response.send('HELLO Ajax post')
});
app.all('/json-server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //响应一个数据
    const data = {
        name:'atguigu'
    };
    //对对象进行字符串转换
    let str = JSON.stringify(data);
    //设置响应体
    response.send(str)
});

// 针对ie缓存
app.all('/ie',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
   
    //设置响应体
    response.send('hello ie -2')
});

app.all('/json-server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //响应一个数据
    const data = {
        name:'atguigu'
    };
    //对对象进行字符串转换
    let str = JSON.stringify(data);
    //设置响应体
    response.send(str)
});

//延时响应
app.all('/delay',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    setTimeout(() => {
        response.send('延时响应')
    }, 3000);
    
});

//axios 服务
app.all('/axios-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // response.send('Hello jQuery AJAX');
    const data = {name:'尚硅谷'};
    response.send(JSON.stringify(data));
});

//4. 监听端口启动服务
app.listen(8000,()=>{
    console.log("服务已经启动, 8000 端口监听中....");
})