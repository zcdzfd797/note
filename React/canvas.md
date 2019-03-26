# Canvas
## 指令
* `var context = canvas.getContext('2d')`
```
.rect(x,y,width,height)
.arc(圆心x,圆心y,r,startAngle,endAngle,direcionMove)
.strokeStyle = "color"
.fillStyle="color/gradient/img"
.fill()
.stroke() //绘画

.moveTo(x,y)
.lineTo(x,y)

.beginPath()
.closePath()

//二次曲线
.quadraticCurveTo(贝塞尔控制点X,贝塞尔控制点Y,x,y)
//贝塞尔曲线
.bezierCurveTo(cpx1,cpy1,cpx2,cpy2,x,y)

.lineWidth = number
.lineCap= (butt | round | square)

//文字与图片绘制
font = '40px Arial'
textAlign = "center|end|left|right|start"
textBaseline="alphabetic|top|hanging|middle|ideographic|bottom"
fillText(text,x,y,[maxwidth])
strokeText(text,x,y,[maxwidth])
measureText()  //存在width属性
drawImage(img,剪裁sx,sy,swidth,sheight,x,y,width,height)

//阴影与渐变
shadowColor="color"
shadowBlur="number"
shadowOffsetX="number"
shadowOffsetY="number"
createLinearGradient(x0,y0,x1,y1)
createRadialGradient(x0,y0,r0,x1,y1,r1)
addColorStop(pst,color)
// 清除与保存
clearRect(x,y,width,height)
toDataURL()  //  挂在canvas下

```
![二次曲线](http://www.w3school.com.cn/i/quadraticcurve.gif)
