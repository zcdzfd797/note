# react 相关问题
1. redux 中间件的原理是什么？
> Redux本身就提供了非常强大的数据流管理功能，但这并不是它唯一的强大之处，它还提供了利用中间件来扩展自身功能，以满足用户的开发需求。
解决异步问题 改装dispatch   
中间件：指的是 action和store之间  他们之间沟通的桥梁是dispatch
redux派发action=>store =>reducers=>改变store
redux-thunk 源码？操作？
```
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
if (typeof action === 'function') {
  return action(dispatch, getState, extraArgument);
}
return next(action);
  };
}
const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
export default thunk;
```


2. 你会把数据统一放到redux中管理，还是共享数据放在redux中管理？
>  统一放在redux中,保证程序的可维护性。（从工程的角度去思考，怎样方便于后期维护和代码定位，最后考虑复用性）

3. `componentWillReceiveProps` 的调用时机？
> props发生改变的时候 （子组件第二次接收到props时）

4. react性能优化的最佳实践？
> pureComponent和immutable.js的结合 完美的解决react的性能问题
pureComponent 底层自带一个shouldComponentUpdate 是一个浅比较

5. 虚拟dom是什么？为什么虚拟dom会提升代码性能？
> 把dom的比对 变成了 js对象的比对。

6. webpack中，是借助loader完成的JSX代码的转化，还是babel？
> vue中是通过 `vue-loader`,react中是通过 `babel-preset-react`

7. 调用setState后，发生了什么？
> 在代码中调用setState函数之后，React 会将传入的参数对象与组件当前的状态合并，然后触发所谓的调和过程（Reconciliation）。 经过调和过程，React 会以相对高效的方式根据新的状态构建 React 元素树并且着手重新渲染整个UI界面。 在 React 得到元素树之后，React 会自动计算出新的树与老树的节点差异，然后根据差异对界面进行最小化重渲染。 在差异计算算法中，React 能够相对精确地知道哪些位置发生了改变以及应该如何改变，这就保证了按需更新，而不是 __全部重新渲染__.

> 调和的过程--你一般怎么用？传什么进去？是传一个对象？ 还是传一个方法？

> 使用函数式调用 通过一个函数往外返回一个对象

这个方法里面有2个参数
参数1: 类型 对象 key是this.state中的key值 val是修后的数据
参数2：类型 函数 1、查看数据是否以经更新 2、可以获取到数据更新后最新的DOM结构
方案一: `this.setState({},()=>{})`
方案二: `this.setState(()=>({}),()=>{});`

8. setStat是异步的，这个点你在什么时候遇到过坑？
> 直接在获取dom的时候 会获取到之前的dom  解决办法：放在回调函数里去做

9. refs的作用是什么，你在什么业务场景下使用过refs
> 操作dom的时候

10. ref是一个函数，有什么好处？
> 尽量不要去用字符串的写法
用箭头函数的写法 方便react在销毁组件的时候包括重新渲染的时候 去有效的帮你清空ref引用的东西 
可以防止内存泄漏
定义:`ref={(params)=>{this.属性 = params}}`
使用： this.属性

11. 高阶组件你是怎么理解的，它本质是一个什么东西?
> react里面尽量不用继承   因为组合优于继承
本质上是一个函数，对一个组件进行包装，返回一个组件。

12. 受控组件与非受控组件的区别？
> 受控组件：组件的改变完全受控于数据的变化
非受控组件：

13. 函数组件和hooks？

14. this执行问题你一般怎么解决？
> 箭头函数的this为什么指向当前组件？
    因为作用域链的问题
在constructor里做bind(this)的绑定 这样可以使函数的引用保持一份 在渲染的时候 可以让组件不做无谓的渲染

15. 函数组件怎么做性能优化？
> 相对于类来比 它是一个函数 没有生命周期 所以没有构造类的过程 直接执行函数就可以了 所以性能更高一些
但是函数是组件 props发生变化了 这个函数就会重新执行  所以性能低
React.memo() 可以对函数式组件进行包装 然后再返回 包装后的组件带有了shouldComponentUpdate的特性

16. 哪个生命周期里发送ajax？
> componentWillMount 在react新版本里已经被废弃了 取而代之的是getDerivedStateFromprops
SSR项目时 componentWillMount要做服务器端数据的获取 所以不能被占用

17. ssr的原理是什么？
18. redux-saga的设计思想是什么？什么是sideEffects？
19. react，jquery，vue是否有可能共存在一个项目中？
20. 组件是什么？类是什么？类被编译成什么？
> 组件指的是：页面的一部分  本质是一个类 最本质上是一个构造函数  
被编译后 其实就是一个构造函数
模块是指 webpack里的每一个文件
函数是指 功能的合集

21. 你是如何跟着社区成长的？
22. 如何避免ajax数据重新获取？
> react-redux进行状态管理

23. react-router4 的核心思想是什么，有什么区别？
> react-router4里面的路由变成了组件 非常灵活 （组件式的思想）
react-router3 基于配置的路由设计思想 

24. immutable.js 和 redux 的最佳实践？
25. reselect 是做什么使用的？
26. rect-router的基本原理，hashHistory , browserHisotry
> hashHistory 完全不需要后端服务器配置的
browserHistory是依赖于后端服务器上的一些配置的
