// 可选类型就是让一个参数本身是可选的
// 一个参数是一个可选类型的时候，他其实是一个类型和undefined的联合类型

// function foo(message?:string){

// }
// 等价于
function foo(message:string|undefined){

}

// let mes:string='1'

export {}