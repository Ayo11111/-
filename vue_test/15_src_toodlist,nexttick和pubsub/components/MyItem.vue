<template>
   <li>
        <label>
              <input type="checkbox" :checked='todoObj.done' @change='handleCheck(todoObj.id)'/>

              <!-- 下面用v-model也能实现功能
                      因为checked类型 绑定v-model，如果是布尔值的话不会影响value，而是影响checked
                      虽然props传入的数据不能修改，不过vue只能检测的浅层次的修改
                      如果是对象里或者数组里某个值的改变vue无法监测，因为没有改变内存地址
                      所以可以直接引用且修改里面的某一个值
                        (但是不太推荐，因为有点违反原则，因为修改了props，只不过vue没监测到)
               -->
              <!-- <input type="checkbox" v-model="todoObj.done"/> -->
          <span v-show='!todoObj.isEdit'>{{todoObj.title}}</span>
          <input v-show='todoObj.isEdit'
           type="text"
           @blur="handleBlur(todoObj,$event)"   
           :value="todoObj.title"
           ref="inputTitle"
           >
        </label>
   <button @click="handleDelete(todoObj.id)" class="btn btn-danger">删除</button>
   <button class="btn btn-edit" v-show="!todoObj.isEdit" @click="handleEdit(todoObj)">编辑</button>
    </li>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
    name:'MyItem',
    // 声明接收todo对象
    props:['todoObj'],
    methods: {
      //勾选
      handleCheck(id){
        //通知app组件将对应的todo对象的done值取反
        // this.checkTodo(id)
        this.$bus.$emit('checkTodo',id)
      },

      //删除
      handleDelete(id){
        if (confirm('确定删除吗')) {
          //通知app
          // this.deleteTodo(id)
          // this.$bus.$emit('deleteTodo',id)
          pubsub.publish('deleteTodo',id)
        }
      },
      //编辑
      handleEdit(todoObj){
        if (todoObj.hasOwnProperty('isEdit')) {
          todoObj.isEdit = true
        }else{
          this.$set(todoObj,'isEdit',true)
        }

          // 以下代码也可以执行
        // setTimeout(() => {
        //   this.$refs.inputTitle.focus()
        // });

        this.$nextTick(function () {
          this.$refs.inputTitle.focus()
        })
      },

      //失去焦点回调(真正执行修改逻辑)
      handleBlur(todoObj,event){
        todoObj.isEdit = false
        if(!event.target.value) return alert('输入不能为空')
        this.$bus.$emit('updateTodo',todoObj.id,event.target.value)
      }
    },
}
</script>

<style scoped>
    /*item*/
    li {
      list-style: none;
      height: 36px;
      line-height: 36px;
      padding: 0 5px;
      border-bottom: 1px solid #ddd;
    }

    li label {
      float: left;
      cursor: pointer;
    }

    li label li input {
      vertical-align: middle;
      margin-right: 6px;
      position: relative;
      top: -1px;
    }

    li button {
      float: right;
      display: none;
      margin-top: 3px;
    }

    li:before {
      content: initial;
    }

    li:last-child {
      border-bottom: none;
    }

    li:hover{
      background-color: #ddd;
    }

    li:hover button{
      display: block;
    }
</style>