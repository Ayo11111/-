<template>
  <div class="student">
      <h2>学校姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <button @click='sendStudentName'>把学生名给App</button>
      <button @click='unbind'>解绑atguigu事件</button>
  </div>
</template>

<script>

export default {
    name:'Student',
    data() {
        return {
            name:'张三',
            sex:'男'
        }
    },
   methods: {
       sendStudentName(){
           //触发Student组件实例身上的atguigu事件
           this.$emit('atguigu',this.name,666,888,999);
        //    this.$emit('demo');

       },
       unbind(){
           this.$off('atguigu') //解绑一个自定义事件事件
        //    this.$off(['atguigu','demo']) //解绑多个事件
        //    this.$off() //解绑所有的自定义事件
       },
       death(){
        //    this.$destroy() //销毁了当前student组件的实例，销毁后所有student实例的自定义事件全都不奏效了
       }
   },
}
</script>

<style scoped>
.student{
    background-color: #bfa;
    padding: 5px;
}
</style>