# vue面试题 by 凡尘
## 001.v-show 与 v-if的区别？
*  `v-show`：操作元素的 display 属性。
*  `v-if`: 操作元素的创建和插入
*  相比较而言v-show的性能更高

## 002.methods、computed、watch三者的区别的区别？
* `methods`是个方法，以事件的触发作为执行条件。
* `computed`计算属性。实时响应，只要data中的属性发生了变化就会触发computed,计算属性是基于[属性的依赖]()进行缓存的。methods调用需要加(),computed调用时无()
* `watch`属性监听，用以监听属性的变化，当值发生变化的时候来执行特定的函数，有2个参数`newVal`,`oldVal`。
## 003.vue中自定义指令如何使用
* [Vue.directive]():
* 参数1：指令1：指令名称
* 参数2：指令实现的函数，在回调函数中第一次参数是指令绑定的元素，参数二是一个对象其中对象中有value属性代表的表达式返回的结果，还有[modifiers属性]()是指令的修饰符。
## 004.vue中组件创建的方式有哪些？
* 全局组件
``` javascript
Vue.component();
// 参数1：组件名称
// 参数2：组件的配置项
```
* 局部组件
``` javascript
new Vue({
	components:{}
	//key 值为组件名称
	//val 值为组件的配置项
})
```
## 005.vue中的过滤器如何使用？
* `Vue.filter()`
	+ 参数1：过滤器名称
	+ 参数2：过滤器实现的方法（过滤的数据，过滤器传递的参数）
## 006.如何实现父子组件传值、非父子组件传值？
* 父组件传递子组件：
	+ 通过属性进行传递 子组件通过props属性进行单向接收 外部属性。
	+ 在父组件中嵌入 标签子组件 时，给其添加属性，值为需要传递的值。并在子组件内部通过props属性进行接收，
		- 数组接收
		- 对象接收 ✔ （可以限制数据的类型） 
* 子组件传递父组件
	* 场景 1
		+ 在父组件中嵌入 标签子组件 时 给子组件绑定自定义方法，子组件通过`this.$emit()`进行触发。
			- | 自定义方法没有`()`。
	* 场景 2
		+ 利用solt插槽作用域。
* 非父子组件传值
	* 场景 1
		+ 创建公共的Vue对象，通过调用Vue中的`$on()`、`$emit()`进行传值。需要接受值的一方调用`$on`,需要传递值的一方调用`$emit()`。
	* 场景 2
		+ 利用观察者模式封装`$on`、`$emit`。
## 007.请说出vue中生命周期函数（钩子函数）？
1. `beforeCreate()`:组件实例刚刚被创建 (el和data并未初始化)
2. `created()`:组件创建完成,属性已绑定,但DOM还未生成,$el属性还不存在 (完成data数据的初始化)
3. `beforeMount()`:模板编译/挂载之前 (完成了el和data初始化)
4. `Mounted()`:模板编译/挂载之后 (完成挂载)
5. `beforeUpdate()`:组件更新之前
6. `updated()`：组件更新之后
7. `beforedestroy()`:组件销毁之前
8. `destroyed()`:组件销毁之后

## 008.请解释一下vue单向数据流的理解？
* 数据从父级组件传递给子组件，只能单向绑定，子组件不能直接修改从父级传递过来的数据。

## 009.请说下什么是动态组件，如何使用，以及keep-alive 的作用？
* 动态组件：让多个组件使用同一个挂载点，并动态进行切换。
	+ 通过保留`<component></component>`元素，动态的绑定它的`is`特性，可以实现动态组件。
* `keep-alive`:组件切换调用时，本身会被销毁。包裹动态组件（组件）时，会将失活的组件实例缓存，下次使用直接从缓存中调用。

## 010.请说下组件的生命周期有哪些？
* `activated`&`deactivated`。
	+ activated : 当组件活跃时触发。
	 + deactivated:缓存状态的时候触发
## 011.vue中solt（插槽）的使用方式，以及solt作用域插槽的用法？
* 使用方式：
	+ | 当把组件当做标签进行使用的时候，用`slot`可以用来接收组件变迁包裹的内容，当给`solt`标签添加`name`属性的时候，可以调换响应的位置。
* 插槽作用域：
	+ | 作用域插槽其实就是带数据的插槽，父组件接收来自子组件的solt标签上 通过 `v-bind`绑定进而传递过来的数据，父组件通过`scope`接收子组件传递过来的数据。
## 012.为什么在组件内部`data`是一个函数而不是一个对象？
* 因为每次调用组件时都会重新生成一个对象，如果是一个对象的情况下，`data`数据会进行复用（因为对象是引用数据类型），而当`data`是一个函数的时候，每次调用时就会返回一个新的对象。
## 013.vue中动画如何实现？
* 给需要动画的元素加`transition`标签。
	+ 进入时class
		- `<name>-enter`
		- `<name>-enter-active`
		- `<name>-enter-to`
	+ 离开时class
		- `<name>-leave`
		- `<name>-leave-active`
		- `<name>-leave--to`
* 一组元素需要动画时 添加标签`<transition-group></transition-group>`
## 014.浅谈对路由的理解？
* 路由就是根据不同的url地址展示不同的页面或数据。
* 路由分为前端路由和后端路由。
	+ 前端路由多用于单页面开发，也就是SPA。
	+ 前端路由不涉及服务器，只要利用hash或HTML5的[historyApi]()来实现的，一般用于不同的内容展示和切换。
## 015.路由跳转的方式有几种？
* `a` 标签
* `router-link`跳转 例如 `：<router-link to="/home">首页<router-link>`
* 编程式路由 例如 `this.$router.push()`
## 016.路由传值的方式有哪几种？
1.[path路径属性传值]() 例如 `path:"/home/:id/name";` 接收的时候通过 `this.$route.params`。
2.[query传值]() 因为url中 ？ 后面的参数不会被解析，因此我们可以通过`query`进行传值。接收的时候通过`this.$route.query`。
3.[路由解耦]() 在配置路由的时候添加`props`属性为 true。在需要接收参数的组件页面通过`props`进行接收。
4.[编程式导航]() `this.$router.push({path:"/home",query:{}});`
## 017.请说出路由配置项常用的属性及作用?
* 路由配置参数：
	+ `path` : 跳转路径
	+ `component` : 路径相对于的组件
	+ `name`:命名路由
	+ `children`:子路由的配置参数(路由嵌套)
	+ `props`:路由解耦
	+ `redirect` : 重定向路由
## 018、编程式导航使用的方法以及常用的方法?
* 路由跳转：`this.$router.push()`
* 路由替换：`this.$router.replace()`
* 后退：`this.$router.back()`
* 前进：`this.$router.forward()`
## 019、如何重定向路由？
* 通过配置路由项中的`redirect`进行重定向
## 020、如何实现路由解耦？
* 在路由的配置项中设置`props:true` 在需要接收组件的内部通过`props`进行接收。
## 021、如何检测路由参数的变化?
* 通过属性监听来实现 或者`beforeRouterUpdate()`
```javascript
watch:{
"$router"(){
	}
}
beforeRouterUpdate(to,from,next);
```
## 022、什么是路由守卫？路由的函数钩子有哪些？
* 什么是路由守卫？
	+ 路由跳转前后座的一些验证。
* 路由常用的钩子函数？
	+ `beforeRouteEnter`、`beforeRouteUpdate`、`beforeRouteLeave`。
	+ 使用场景：
		- `beforeRouteEnter`:当路由进入之前：登录验证、热力图的记录……。
		- `beforeRouteEnter`:当路由进行更新的时候： 如果当前路由发生了变化，但没有组件的创建销毁事件执行时，需要这个钩子函数。
		- `beforeRouteLeave`:当路由离开的时候： 当用户没有进行支付离开时、当用户填写完信息未保存时……。
## 023、什么是全局守卫
* `beforeEach`:全局守卫。验证用户是否登录
```javascript
router.beforeEach((to,from,next)=>{
	//登陆状态
	let status = false;
	//所有路由组建的name名字
	const nextRouter = ["two","three","detail"];
	
	if(nextRouter.indexOf(to.name)>=0){
		if(!status){
			router.push({name:"login"})
		}else{
			next();
		}
	}else{
		next();
	}
})
```
## 024、 ❓❓ axios与jquery的ajax有什么不同？
* axios的优点：
	1. 从nodejs中创建http请求
	2. 支持`promiseAPI`
	3. 提供了一些并发请求的接口
	4. 自动转换json数据
	5. 客户端支持防止[CSRF/XSRF]()
* ajax的缺点：
	1. 如果使用jQuery | jQuery项目庞大，单纯的使用ajax功能需要引用整个Jquery 非常不合理
	2. 基于原生的XHR开发，但是XHR架构并不清晰。
## 025、 简述vuex的数据传递流程
* 当组件进行数据修改时，我们需要调用`dispath`来触发`actions`里面的方法。`actions`里面的每个方法中都会有一个`commit`方法，当方法执行的时候会通过`commit`来触发`mutations`里面的方法进行数据的修改。`mutations`里面的每个函数都会有一个`state`参数，这样就可以在`mutations`里面进行`state`的数据修改，当数据修改完毕后，会传导给页面。页面的数据也会发生改变。
## 026、双向数据绑定的原理
* 利用了`Object.defineProperty()`这个方法重新定义了对象获取属性值`get` & 设置属性值`set` 的操作来实现的。
	+ `Object.defineProperty()`方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回这个对象。
## 027、使用vue时一次性加载所有数据会使得初始化页面很卡，该如何解决？
* ❓❓懒加载 --- 按需加载
	+ 用法：在配置路由时使用：component:resolve=>require([“@components/路由的路径”]，resolve)。就是用了懒加载后打完包直接运行那个index.html会报错，报文件引用错误其实是打包时候路径配置有点问题，找到build下面的webpack.prod.conf.js 添加 publicPath："./"。
## 028、vue中的scoped
1. 在vue组件中，在style标签添加`scoped属性`，以表示它到底样式作用于当下的模块，很好的实现了样式私有化的目的。
2. 缺点在于 样式不易修改。 很多时候 我们需要对公共组件的样式做微调。
## 029、vue路由传值params和query的区别
1. query传参和接收参数：
	+ 传参：`this.$router.push({ path:'/xxx' query:{ id:id } })`
	+ 接收参数：`this.$route.query.id`
		- __WARN__传参是 this.$router,接收参数是 this.$route
2. params传参和接收参数
	+ 传参：`this.$router.push({ name:'xxx' params:{ id:id } })`
	+ 接收参数：`this.$route.params.id`
* 区别：使用query如同get会在地址栏显示请求参数，parmas相当于post请求，参数不会再地址栏显示
## 030、跨域的方式
1. jsonp
2. 正向代理（forward proxy）
```javascript
//用http-proxy-middleware模块
app.use("/api",proxy({
target:"协议+域名",
changeOrigin:true
}))
```
3. cors  --- php

## 031、在Vue中使用插件的步骤
* 引入插件
	+ `import…from`  ---es6
	+ `require()` ---Commonjs
* 使用全局方法`Vue.use(plugin)`使用插件，可以传入一个选项对象`Vue.use(MyPlugin,{someOption:true})`
## 032、请列举出3个Vue中常用的生命周期钩子函数
* activated: keep-alive 组件激活时调用
## 033、第一次页面加载会触发哪几个钩子？
* beforeCreate, created, beforeMount, mounted
## 034、简单描述每个周期具体适合哪些场景
* beforecreate : 可以在这加个loading事件，在加载实例时触发
* created : 初始化完成时的事件写在这里，如在这结束loading事件，异步请求也适宜在这里调用
* mounted : 挂载元素，获取到DOM节点
* updated : 如果对数据统一处理，在这里写上相应函数
* beforeDestroy : 可以做一个确认停止事件的确认框
* nextTick : 更新数据后立即操作dom
## 035、Vue里面router-link在电脑上有用，在安卓上没反应怎么解决？
* 安装babel polypill 插件。
## 036、❓❓❓vuex有哪几种属性(modules)？
* `State/Getter、Mutation、Action、Module`
* vuex的State特性
1.Vuex就是一个仓库，仓库里面放了很多对象。其中state就是数据源存放地，对应于一般Vue对象里面的
data
2.state里面存放的数据是响应式的，Vue组件从store中读取数据，若是store中的数据发生改变，依赖这个
数据的组件也会发生更新
3.它通过mapState、mapGetters把全局的 state 和 getters 映射到当前组件的 computed 计算属性中
* vuex的Getter特性
1.getters 可以对State进行计算操作，它就是Store的计算属性
2. 虽然在组件内也可以做计算属性，但是getters 可以在多组件之间复用
3. 如果一个状态只在一个组件内使用，是可以不用getters
* vuex的Mutation特性
Action 类似于 mutation，不同在于：Action 提交的是 mutation，而不是直接变更状态；Action 可以包
含任意异步操作。