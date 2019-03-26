## Vue 第一天
__v-text__ 简写 {{}}
基于 innerText 解析数据 解析任何js表达式
> `v-text=""` //这里的双引号 是vue自定义的 划定界限的符号，其中输入字符串需要加单引号
> * 简写的弊端：当网速很慢或者下面的JavaScript写错时，会直接将 {{**}} 输出到页面，
__v-html__ 
基于 innerHTML 解析html标签

__v-show__
操作元素的display属性（性能更高）
__v-if__
操作元素的创建和销毁

__v-for__
>`v-for="(数据，下标)in 需要遍历的数据"`

__v-on__  简写 @
>`v-on:事件="事件方法名"`
> * vue实例身上所有的方法都需要写在methods里面

* __v-on 的事件修饰符__  功能同js兼容
* > . 点开头 如  `v-on:click.stop="事件方法名"`
** `.stop`
** `.prevent`
** `.capture`
** `.self`
** `.once`
** `.passive`



__v-bind__  简写 :
> * 动态地绑定一个或多个特性，或一个组件prop到表达式
- 绑定prop时，prop必须在子组件中声明。可以用修饰符指定不同的绑定类型

__v-pre__ 不解析数据
__v-cloak__ 与css规则配合使用 令可以隐藏未编译的 Mustache 标签直到实例准备完毕。
+ 可想象实例结束---> css中的：hover

__v-model__ 双向数据绑定 
+ 只建议在表单使用
+