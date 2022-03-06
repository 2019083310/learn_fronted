// 可选类型是给对象类型使用的，单个变量不能使用
// let num?:number=1

function sum(point:{x:number,y:number,z?:number}){
  console.log(point.x)
  console.log(point.y)
  console.log(point.z)
}

sum({x:1,y:2})
sum({x:1,y:2,z:3})

export {}