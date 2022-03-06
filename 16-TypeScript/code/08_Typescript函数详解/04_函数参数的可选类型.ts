// 可选类型必须放在必选类型的后面
function foo(x:number,y?:number){
  console.log(x,y)
}
foo(20,30)
foo(20)

export {}