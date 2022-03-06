// 这个运算符也是js中的特性，在es2020中提出
// 当前边的值是null或者undefined的时候，返回后边的值,类似于三元条件运算符

let message=null||'你好啊,kobe'
// 或者
let mes=null??'你好啊,curry'
// 但是||这个运算符有缺陷，当前边是一个''或者0的时候也会返回后边的值