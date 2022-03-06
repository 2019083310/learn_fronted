interface IPerson{
  name:string
  age:number
  height:number
}

// 这种情况是符合的
// const info:IPerson={
//   name:'coder',
//   age:18,
//   height:1.88
// }

// 但是下面这种情况是不符合的
// 因为直接赋值为一个字面量的时候会进行类型推导
// Typescript在类型推导的时候会严格按照类型检测,类型中没有的属性或者多余的属性都会报错
// 对象文字可以只指定已知属性，并且“address”不在类型“IPerson”中
// const info:IPerson={
//   name:'coder',
//   age:18,
//   height:1.88,
//   address:'dalian'
// }

// 但是如果用下面这种方式会解决上面的问题
// 这是因为赋值为一个对象的引用的时候,Typescript会有一个freshness擦除操作
const IInfo={
  name:'coder',
  age:18,
  height:1.88,
  address:'dalian'
}
const info:IPerson=IInfo

// 虽然可以赋值给info,但是不能读取info类型中没有的属性，比如address
// 折磨做只是为了不用赋值给某个变量而去除多余的属性
// console.log(info.address)//报错
export {}