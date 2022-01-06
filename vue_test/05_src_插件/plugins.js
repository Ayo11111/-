export default{
    install(Vue,x,y){
        console.log(x,y)
         //配置全局过滤器    
         Vue.filter('mySlice',function (value) {
            return value.slice(0,4)
       })

       Vue.directive('fbind',{
        //  指令与元素成功绑定时（一上来）  
          bind(element,binding){
            element.value = binding.value;
            // console.log(this) 注意，此处的this是window
          },
        //  指令所在元素被插入页面时 
          inserted(element,binding){
               element.focus(); 
          },
        //  指令所在的模板被重新解析时 
          update(element,binding){
            element.value = binding.value;
          }
       })

       //定义混入
       Vue.mixin({
        data() {
            return {
                x:100,
                y:200
            }
        },
       })
   
       //给vue原型上添加一个方法(vm和vc就都能用了)
       Vue.prototype.hello = ()=>{alert('你好啊')}
    }
}