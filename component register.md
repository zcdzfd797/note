## 组件
### 定义组件名的方式
* kebab-case 羊-肉-串-命-名
* PascalCase 帕斯卡命名法/大驼峰命名 

### 全局注册
```
Vue.component('my-component-name',{/*……*/})
```
### 局部注册
```
var ComponentA = {/*……*/}
```
```
new Vue({
	el :'#app',
	components :{
		'component-a' : ComponentA
	}
})
```

## Prop
> HTML中的特性名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。
> 任何类型的值都可以传给一个prop
> 