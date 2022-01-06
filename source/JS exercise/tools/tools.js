    //定义一个变量，用来保存定时器的标识
                 /*
                    目前我们的定时器的标识由全局变量timer保存
                      所有的正在执行的定时器都在这个变量中保存
                 */
                 
                //  var timer2;

                //尝试创建一个可以执行简单动画的函数
                /*
                   参数：
                     obj:要执行动画的对象
                     attr：要执行动画的样式
                     target:执行动画的目标位置
                     speed：移动的速度（正数向右移动，负数向左移动）
                     callback:这个函数将在动画执行完毕以后执行
                */
                     function move(obj,attr,target,speed,callback) {
                        //关闭上一个计时器
                        clearInterval(obj.timer2);
   
                          // 因为获取到的数值有px，所以要加一个parseInt方法去取数字(把字符串里的合法数字取出来)
                          //获取元素当前的位置
                          var curren = parseInt(getStyle(obj,attr));
   
                       //判断speed的正负值
                       //如果从0-800移动，则speed为正
                       //如果从800-0移动，则speed为负
                           if (curren > target) {
                               //此时速度应为负值
                               speed = -speed;
                           }
   
   
                           //开启一个定时器，用来执行动画效果
                           //向执行动画的对象中添加一个timer属性，用来保存它自己的定时器标识
                           obj.timer2 = setInterval(function () {
                           //获取box1原来的left值
                           var oldValue = parseInt(getStyle(obj,attr));
   
                           //在旧值的基础上增加新值
                           var newValue = oldValue + speed;
   
                           //判断newValue是否大于800
                           //向左移动时，需要判断newValue是否小于target
                           //向右移动时，需要判断newValue是否大于target
                           if ((speed < 0 && newValue < target) || (speed>0 && newValue >target)) {
                               newValue = target;
                           }
   
                           //将新值设置给box1
                           obj.style[attr] = newValue + 'px';
   
                           //当元素移动到0px时，使其停止执行动画
                           if (newValue == target) {
                               clearInterval(obj.timer2);
   
                               //动画执行完毕，调用回调函数
                               callback && callback();
                           }
   
                           },30) 
                                           }
   
   
   
               function getStyle(obj,name) {        
                       if (window.getComputedStyle) {
                           //.name的本质是['name']
                           //正常浏览器的方式
                           return getComputedStyle(obj,null)[name];
                       }else{
                           //IE8的方式
                           return obj.currenStyle[name];
                       }
                       //和上面一样，用的是三元运算符
                       // return window.getComputedStyle?getComputedStyle(obj,null)[name]:obj.currenStyle[name]; 
                       }


             // 定义一个函数，用来向一个元素中添加指定的class值
            /*
                参数：
                obj 要添加class属性的元素
                cn  要添加的class值
            */
            function addClass(obj,cn) {
                //检查obj中是否含有cn
                if (!hasClass(obj,cn)) {
                    obj.className +=' '+cn
                }
            };

            //判断一个元素中是否还有指定的class属性值
                /*
                    参数：
                      obj 要判断class属性的元素
                      cn  要判断的class值

                   如果有该class，则返回true，没有则返回false   
                */
               function hasClass(obj,cn) {
                   //判断obj中是否含有cn class
                  // 创建一个正则表达式   
                    // var reg = /\bb2\b/;
                    var reg = new RegExp('\\b'+cn+'\\b');  
                         
                    return reg.test(obj.className);
               };

               /*
                删除一个元素中指定的class属性
               */
               function removeClass(obj,cn) {
                   // 创建正则表达式
                   var reg = new RegExp('\\b'+cn+'\\b'); 

                   //删除class
                   obj.className = obj.className.replace(reg,'');
               };

               /*
                 toggleClass可以用来切换一个类
                 如果元素中具有该类，则删除
                 如果元素中没有该类，则添加

               */
               function toggleClass(obj,cn) {
                   //判断obj中是否含有cn
                   if (hasClass(obj,cn)) {
                       //有，则删除
                       removeClass(obj,cn);
                   }else{
                       addClass(obj,cn);
                   }
               };