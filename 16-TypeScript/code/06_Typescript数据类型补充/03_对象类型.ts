function foo(point:{x:number,y:number}){
  // 这里制定了函数的参数是一个对象类型，并且里面的属性也做了类型注解
  // 如果传递的不是对象类型或者对象类型里面的参数不是Number类型，编译器都会报错
  console.log(point.x)
  console.log(point.y)
  
}

// foo(1)//报错
foo({x:18,y:1.88})

export {}