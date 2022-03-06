// 下面这种联合类型，然后变量做加法操作会报错

// 因此，我们就需要使用类型缩小进行判断
// 但是：联合类型有很多缺点
// 1.进行很多的逻辑判断(类型缩小)
// 2.返回值的类型依然是不能确定的
function add(a1:number|string,a2:number|string){
  if(typeof a1==='number'&&typeof a2==='number'){
    return a1+a2
  }else if(typeof a1==='string'&&typeof a2==='string'){
    return a1+a2
  }
  // return a1+a2
}
add(1,2)
export {}