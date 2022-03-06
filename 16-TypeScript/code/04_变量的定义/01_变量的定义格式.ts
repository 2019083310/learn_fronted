// 1.类型注解
// 2.var/let/const
// 3.string和String的区别
// 4.变量的类型推断

var name:string='coder'
let age:number=18
const height:number=1.88

// string:typescript中的字符串类型
// String:javascript中包装类

// 默认情况下进行赋值，会将赋值的类型作为标识符的类型注解
// 这个过程成为类型推导
let foo='mes'
// foo=123报错

// 下面这行代码的作用是：
// 在ts中处于一个目录下的ts文件,里面的所有的文件的变量名是不允许重复的
// 如果想让每个ts文件有自己的模块，下面这种方式可以做到
export {}