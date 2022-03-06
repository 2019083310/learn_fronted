// 前面我们可以通过type定义函数类型
// type CalcFn=(n1:number,n2:number)=>void

//实际上接口也可以定义函数类型
interface CalcFn{
  (n1:number,n2:number):number
} 

function calc(num1:number,num2:number,calcFn:CalcFn){
  return calcFn(num1,num2)
}

const add:CalcFn=(num1,num2)=>{
  return num1+num2
}

// 但是，开发中我们还是推荐用type定义函数类型
calc(20,30,add)