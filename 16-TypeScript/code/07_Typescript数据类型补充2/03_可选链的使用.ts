type Person={
  name:string,
  friend?:{
    name:string,
    age?:number
  }
}

const info:Person={
  name:'coder',
  friend:{
    name:'kobe'
  }
}

// 获取name等属性的时候
// 我们不知道age是否存在，那么就必须做大量的if判断
// 但是我们可以使用更加简洁的方式：可选链操作符?.
// console.log(info.friend.age)
console.log(info.friend?.age)//undefined
console.log(info.friend?.name)//kobe

