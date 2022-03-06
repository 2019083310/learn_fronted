// 最主要的区别就是interface可以对一个类型多次声明属性的类型
// type只能定义一次

// 报错
// type IFoo={
//   name:string
// }

// type IFoo={}

// interface不会，而是把它们合并起来
interface IBar{
  name:string
}

interface IBar{
  age:number
}

// 相当于
// interface IBar{
//   age:number
//   name:string
// }

// Interface最主要能做的原因就是我们的Typescript在下载的时候
// 会下载一些.lib文件，里面就会引入一些Window/Number等等类型
// 所以我们的编译器就会自动识别,interface这样做就可以给他们添加额外的属性类型

// 比如:不会报错
// interface Window{
//   age:number
// }
// window.age=10
// console.log(window.age)
