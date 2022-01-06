<template>
  <div class="student">
      <h2>学校姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <button @click="sendName">把学生名给school组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'Student',
    data() {
        return {
            name:'张三',
            sex:'男'
        }
    },
    methods: {
        sendName(){
        //    this.$bus.$emit('hello',this.name) 
        pubsub.publish('hello',666)
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