<template>
  <div>
      <h1 v-text="msg" ref="title"></h1>
      <button ref="btn" @click='showDom'>点我输出上方的DOM</button>
      <School ref="sch"/>
  </div>
</template>

<script>
import School from'./components/School'

export default {
    name:'App',
    components:{School},
    data() {
        return {
            msg:'欢迎学习vue'
        }
    },
    methods: {
        showDom(){
            console.log(this.$refs.sch)//School组件的实例对象
            console.log(this.$refs.btn)//真实DOM元素
            console.log(this.$refs.title)//真是DOM元素
        }
    },
}
</script>

<style>

</style>