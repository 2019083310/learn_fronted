// tuple元组：多种元素的组合

// 1.数组的弊端
const info:any[]=['coder',18,1.88]
const name=info[0]//不能确定name的类型

// console.log(info[0])
// console.log(info[1])

// 2.使用元组tuple
const infoMes:[string,number,number]=['coder',18,1.88]
const age=infoMes[1]//确定的数据类型
const infoName=infoMes[0]

export {}

