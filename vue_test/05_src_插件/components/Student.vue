<template>
  <div>
    <h2>学校姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <input type="text" v-fbind:value="name" />
  </div>
</template>

<script>
//引入一个混合
// import {mixin,mixin2} from '../mixin'

export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
};
</script>
