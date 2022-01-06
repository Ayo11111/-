<template>
  <div class="school">
      <h2>学校名称:{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
    //引入一个混合
// import {mixin,mixin2} from '../mixin'

export default {
    name:'School',
    data() {
        return {
            name:'尚硅谷',
            address:"深圳"
        }
    },
    mounted(){
        this.$bus.$on('hello',(data)=>{
            console.log('我收到了'+data)
        })
    }
}
</script>

<style scoped lang='less'>
.school{
    background-color: pink;
    padding: 5px;
    margin-top:10px ;
    }
</style>
