<template>
  <div>
    <h2>学校名称:{{ name | mySlice }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="test">点我测试一下</button>
  </div>
</template>

<script>
//引入一个混合
// import {mixin,mixin2} from '../mixin'

export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷atguigu",
      address: "深圳",
    };
  },
  methods: {
    test() {
      this.hello();
    },
  },
};
</script>
