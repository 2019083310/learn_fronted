function foo(){
  return 'abc'
}

function bar(){
  return 123
}

let flag=true

let result:unknown
// unknown类型和any类型的区别
// unknown类型只能赋值给unknown和any
// any类型可以赋值给任何类型

if(flag){
  result=foo()
}else{
  result=bar()
}

console.log(result)

let mes:unknown=result//不会报错
let mess:any=result//不会报错
// let message:string=result//报错

export {}
