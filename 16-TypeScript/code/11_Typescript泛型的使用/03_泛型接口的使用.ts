
// interface IPerson<T1=string,T2=number>{
//   name:T1
//   age:T2
// }

// 或者
interface IPerson<T1,T2>{
  name:T1
  age:T2
}
const info:IPerson<string,number>={
  name:'coder',
  age:18
}