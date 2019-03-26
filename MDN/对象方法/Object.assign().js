const v1 = "abc";
const v2 = true;
const v3 = 10;
const v4 = Symbol("foo")

const obj = Object.assign({},v1,v2,v3); 
console.log(obj);

Object.create(proto, [propertiesObject])