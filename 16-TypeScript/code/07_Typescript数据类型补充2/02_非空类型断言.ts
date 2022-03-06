// 非空类型断言指的就是在ts编译阶段，可以确定某个值是一定存在的
// 如果不使用，那么在编译阶段可能就会报错，这是tsconfig.json的里面的某些设置
function printId(id?:string){
  // 如果是undefined就会报错
  // 如果用非空断言--!就会确定id一定是有值的
  console.log(id!.toLowerCase())
}

printId('abc')

export {}