// 函数的重载是什么？
// 就是函数名称相同，但是函数的参数不同(参数类型不同，参数个数不同)
// 这就是函数的重载
function sum(num1:number,num2:number):number;
function sum(num1:string,num2:string):string;
function sum(num1:number,num2:string):void;

function sum(num1:any,num2:any):any{
  return num1+num2
}

console.log(sum(1,2))
console.log(sum('1','2'))
console.log(sum(1,'a'))

// 但是函数的重载不能直接调用实现函数
// sum({name:kobe},{age:18})


export {}