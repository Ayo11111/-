<template>
  <div class="container">
  <Category title="游戏">
    <!-- 作用域插槽必须要用template才能接收数据  -->
     <template scope="games">
       <ul>
        <li v-for="(item,index) in games.games" :key="index">{{item}}</li>
        </ul>
     </template>
  </Category>

  <Category title="游戏">
     <template scope="games">
       <ol>
        <li style="color:red" v-for="(item,index) in games.games" :key="index">{{item}}</li>
        </ol>
     </template>
  </Category>

  <Category title="游戏">
    <!-- scope接收数据时支持解构赋值的方式 (传过来的是个对象)-->
      <template slot-scope="{games}">
      <h4 v-for="(item,index) in games" :key="index">{{item}}</h4>
     </template>
  </Category>
  </div>
</template>




<script>
  import Category from './components/Category.vue'

  export default {
    name:'App',
    components:{Category},
}
</script>

<style lang="css" scoped>
  .container{
    display: flex;
    justify-content: space-around;
  }
  .foot{
    display: flex;
    justify-content: space-around;
  }
  h4{
    text-align: center;
  }
</style>
