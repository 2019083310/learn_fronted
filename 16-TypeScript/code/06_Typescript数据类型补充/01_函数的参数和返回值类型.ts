// 给参数加上类型注解: num1: number, num2: number
// 给返回值加上类型注释: (): number
// 在开发中,通常情况下可以不写返回值的类型(自动推导)
// 注意：函数的参数加上了类型约束，传入的参数不能多也不能少
function sum(num1:number,num2:number){
  return num1+num2
}
sum(1,2)//正确
// sum(1)错误

export {}