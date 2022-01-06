<template>
    <div class="demo">  
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click='showName'>点我提示学校名</button>
     </div>
    <!-- 组件的结构 -->
</template>

<script>
// 组件交互相关的的代码(数据、方法等)
/*
    exoprt 分别暴露 (写在定义前即可)
    export {school} 统一暴露
    export default school 默认暴露
*/ 
 //export 
// |
        export default {
            name:'School',
            data(){
             return  {
                 name:'尚硅谷',
                 address:'北京'
            }               
            },
            methods: {
                showName(){
                    alert(this.schoolName);
                }
            },
           }
        //    exprot{school}
        //    export default school;
</script>

<style>
/* 组件的样式 */
    .demo{
        background-color: pink;
    }
</style>

