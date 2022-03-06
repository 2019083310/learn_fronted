// 我们可以通过type类型别名来声明一个对象类型
// 也可以使用只读属性,可选操作符
type InfoType={
  name:string,
  age:number,
  readonly height:number,
  friend?:{}
}

// 除此之外，我们还可以通过interface接口来声明一个对象类型
// 而且，我们还可以在对象内部使用可选类型和只读属性
// interface InfoType{
//   name:string,
//   age:number,
//   friend?:{
//     name:string
//   },
//   readonly height:number
// }

const info:InfoType={
  name:'coder',
  age:18,
  friend:{
    name:'kobe'
  },
  height:1.88
}

console.log(info.height)
// info.height=1//报错，只读属性