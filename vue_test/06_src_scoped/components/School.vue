<template>
  <div class="demo">
      <h2 class="qwe">学校名称:{{name}}</h2>
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
            name:'尚硅谷atguigu',
            address:"深圳"
        }
    }
}
</script>

<style scoped lang='less'>
.demo{
    background-color: pink;
    .qwe{
        font-size: 40px;
    }
}
</style>
