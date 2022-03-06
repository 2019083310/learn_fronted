// let/const关键字在定义变量的时候，他的默认的类型推断是不一样的
// let定义的变量的类型推断是string/number/boolean/null/object这种
// const定义的变量的类型推断是字面量类型

// 什么是字面量类型？
// 就是值和类型是一样的，这样的情况下，他的值默认情况下不能在改变(除了借助其他方法)

const message='hello world'
let mes='curry'

const index=1//字面量类型
// index=2//报错
let num=2

export {}