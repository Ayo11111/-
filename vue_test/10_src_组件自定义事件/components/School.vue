<template>
  <div class="school">
      <h2>学校名称:{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <button @click='sendSchoolName'>把学校名给App</button>
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
    props:['getSchoolName'],
    methods: {
        sendSchoolName(){
            this.getSchoolName(this.name)
        }
    },
}
</script>

<style scoped lang='less'>
.school{
    background-color: pink;
    padding: 5px;
    margin-top:10px ;
    }
</style>
