<template>
    <section class="jumbotron">    
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" v-model="keyWord" placeholder="enter the name you search"/>&nbsp;
        <button @click="searchUsers">Search</button>
      </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name:'MSearch',
    data() {
        return {
            keyWord:''
        }
    },
    methods: {
        searchUsers(){
            // 请求前更新list的数据
            this.$bus.$emit('upDateListDate',{users:[],isFirst:false,isLoading:true,errMsg:''})
            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                response=>{
                     // 请求成功后更新list的数据
                   this.$bus.$emit('upDateListDate',{users:response.data.items,isLoading:false,errMsg:''})
                },
                error=>{
                     // 请求失败更新list的数据
                    this.$bus.$emit('upDateListDate',{users:[],isLoading:false,errMsg:error.message})
                }
            )
        }
    },
}
</script>

<style>

</style>