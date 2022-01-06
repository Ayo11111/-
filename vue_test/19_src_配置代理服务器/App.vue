<template>
 <div>
  <button @click="getStudent">获取学生信息</button>
  <button @click="getCar">获取汽车信息</button>
  
</div>

</template>




<script>
import axios from 'axios'
export default {
    name:'App',
    methods: {
      getStudent(){
        axios.get('http://localhost:8080/atguigu/students').then(
          // 成功后返回的是一个服务对象，服务对象里的data才是给的东西
            response=>{
              console.log('请求成功了',response.data)
            },
            err=>{
              console.log('请求失败了',err.message)
            }
        )
      },
      getCar(){
        axios.get('http://localhost:8080/demo/cars').then(
          // 成功后返回的是一个服务对象，服务对象里的data才是给的东西
            response=>{
              console.log('请求成功了',response.data)
            },
            err=>{
              console.log('请求失败了',err.message)
            }
        )
      }
    },
}
</script>