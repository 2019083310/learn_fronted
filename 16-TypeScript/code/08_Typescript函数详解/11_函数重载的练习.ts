// 实现方式1：联合类型
// function getLength(args:string|number[]){
//   return args.length
// }

// console.log(getLength('abc'))
// console.log(getLength([1,2,3]))

// 实现方式2：函数重载
function getLength(args:string):number;
function getLength(args:number[]):number;

function getLength(args:any):any{
  return args.length
}

console.log(getLength('abc'))
console.log(getLength([1,2,3]))