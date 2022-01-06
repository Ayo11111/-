<template>
    <div>
      <h1>当前求和为:{{sum}}</h1>
      <h3>当前求和值放大10倍为:{{bigSum}}</h3>
      <h3>我在{{school}},学习{{subject}}</h3>
      <select v-model.number="n">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementOdd">当前求和为奇数再加</button>
      <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
    name:"Count",
    data() {
        return {
            n:1 //用户选择的数字
        }
    },
    computed:{
            // 程序员自己写的计算属性
        // sum(){
        //     return this.$store.state.sum
        // },
        // school(){
        //     return this.$store.state.school
        // },
        // subject(){
        //     return this.$store.state.subject
        // },

        // 这里不能用对象的简写形式，因为简写形式要求值是变量，这里的值是一个字符串
        // 借助mapState生成计算属性，从state中读取数据。（对象写法）
        // ...mapState({sum:'sum',school:'school',subject:'subject'}),

        // 借助mapState生成计算属性，从state中读取数据。（数组）
        ...mapState(['sum','school','subject']),

        // bigSum(){
        //     return this.$store.getters.bigSum
        // },

        //借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
        // ...mapGetters({bigSum:'bigSum'})

        // // 借助mapGetters生成计算属性，从getters中读取数据。（数组（数组写法）
        ...mapGetters(['bigSum'])
    },
    methods: {
    increment(){
       this.$store.commit('JIA',this.n)
    },
    decrement(){
       this.$store.commit('JIAN',this.n)
    },
    incrementOdd(){
       this.$store.dispatch('jiaOdd',this.n)
    },
    incrementWait(){
        setTimeout(() => {
       this.$store.dispatch('jiaWait',this.n)     
        }, 500);
    },
    },
    mounted() {
        const x = mapState({sum:'sum',school:'school',subject:'subject'})
    },
}
</script>

<style>
   button{
       margin-right: 5px;
   }
    
</style>