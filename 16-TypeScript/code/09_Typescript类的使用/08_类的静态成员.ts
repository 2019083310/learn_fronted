class Person{

  static age='coder liu'
  static eating(){
    console.log('eating')
  }
}

const p=new Person()

// console.log(p.eating())//编译器就会报错，eating方法不存在
Person.eating()//正确方式调用
console.log(Person.age)

export {}