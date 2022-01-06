// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

// 创建并暴露一个路由器
const router = new VueRouter({
    // 改变模式（hash、和history，默认是hash模式）
    mode:'hash',
    routes:[
        {
            name:'guanyv',
            path:'/about',
            component:About,
            meta:{title:'关于'}
        },
        {
            name:'主页',
            path:'/home',
            component:Home,
            meta:{title:'主页'},
            children:[
                {
                    name:'xinwen',    
                    path:'news',
                    component:News,
                    meta:{isAuth:true,title:'新闻'},
                    beforeEnter: (to, from, next) => {
                        console.log(to,from);
                        //    if (to.path === '/home/news'||to.path === '/home/message') {
                           if (to.meta.isAuth){//是否需要鉴权
                            if (localStorage.getItem('school')==='atguigu') {
                                // document.title = to.meta.title || '摸奶奶'
                                next()
                            }else{
                                alert('学校名不对，无权限查看')
                            }
                           }else{
                            // document.title = to.meta.title || '摸奶奶'
                               next()
                           }
                    }
                },
                {
                    name:'xiaoxi', 
                    path:'message',
                    component:Message,
                    meta:{isAuth:true,title:'消息'},
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',
                            component:Detail,
                            meta:{isAuth:true,title:'详情'},

                            // props的第一种写法，值为对象,该对象中的所有key-value都会以props的形式传给detail组件
                            // props:{a:1,b:'hello'}

                            // props的第二种写法，值为布尔值。若布尔值为真，就会把该路由组件收到的所有parmas参数，以props的形式传给detail组件
                            // props:true,

                            // props的第三种写法，值为函数
                            props($route){
                              return {
                                  id:$route.query.id,
                                  title:$route.query.title
                                }  
                            }
                        }
                    ]
                }
            ]
        },
    ]
})

// 全局前置路由守卫--初始化的时候被调用、每次路由切换之前被调用
// router.beforeEach((to,from,next)=>{
//     console.log(to,from);
// //    if (to.path === '/home/news'||to.path === '/home/message') {
//    if (to.meta.isAuth){//是否需要鉴权
//     if (localStorage.getItem('school')==='atguigu') {
//         // document.title = to.meta.title || '摸奶奶'
//         next()
//     }else{
//         alert('学校名不对，无权限查看')
//     }
//    }else{
//     // document.title = to.meta.title || '摸奶奶'
//        next()
//    }
// })

// 全局后置路由守卫--初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to,from)=>{
    document.title = to.meta.title || '摸奶奶'
})


export default router