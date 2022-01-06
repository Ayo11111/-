<template>
  <div class="school">
      <h2>学校名称:{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
    name:'School',
    data() {
        return {
            name:'尚硅谷',
            address:"深圳"
        }
    },
    methods: {
        demo(msgName,data){
        console.log('有人发布了hello消息',msgName,data)
        }
    },
    mounted(){
        // this.$bus.$on('hello',(data)=>{
        //     console.log('我收到了'+data)
        // })

    // 传过来的数据接受两个参数，第一个是名字，第二个才是真正的数据
     this.pubid = pubsub.subscribe('hello',this.demo)
    },
    beforeDestroy(){
        // this.$bus.$off('hello')
        pubsub.unsubscribe(this.pubid)
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
