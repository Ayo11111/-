//1.引入fs的模块
const fs = require('fs')

// //2.调用方法读取文件
// // err是错误对象，如果失败是个null
// // data是读取的结果
// fs.readFile('./md/为学.md',(err,data)=>{
//     //如果失败，则抛出错误
//     if(err) throw err;
//     // 如果没有出错，则输出内容
//     console.log(data.toString())
// });


//3使用Promise 封装
const p = new Promise(function (resolve,reject) {
    fs.readFile('./md/为学.md',(err,data)=>{
        //判断如果失败
        if(err) reject(err);
        //如果成功
        resolve(data)
    })
})

p.then(function (chengong) {
    console.log(chenggong)
},function (err) {
    console.log('读取失败')
})