<template>
  <div class="app">
      <h1>{{msg}},学生姓名是:{{studentName}}</h1>
      <!-- 通过父组件给子组件传递函数类型的props实现：子给父传数据 -->
      <School :getSchoolName='getSchoolName'/>
      <hr>
      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传数据(第一种写法：使用@或v-on) -->
      <!-- <Student @atguigu='getStudentName' @demo='m1'/> -->
      <!-- <Student @atguigu.once='getStudentName'/> -->

       <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传数据(第二种写法：使用ref-->
      <Student ref="student" @click.native="show"/>
  </div>
</template>

<script>
import Student from'./components/Student'
import School from'./components/School'

export default {
    name:'App',
    components:{Student,School},
    data() {
      return {
        msg:'你好啊！',
        studentName:''
      }
    },
   
   methods: {
     getSchoolName(name){
       console.log('app收到了学校吗名'+name)
     },
    //  ...params就是把第一个参数当name的，其他的参数放到params中(一个数组)
      getStudentName(name,...params){
       console.log('App收到学生名'+name,params)
       this.studentName = name
     },
     m1(){
       console.log('demo事件被触发了')
     },
     show(){
       alert('123');
     }
   },
   mounted(){
       this.$refs.student.$on('atguigu',this.getStudentName)//绑定自定义事件
      //  this.$refs.student.$once('atguigu',this.getStudentName)//绑定自定义事件（一次性）
    
   }
}
</script>

<style>
.app{
  background-color: gray;
  padding: 5px;
}
</style>