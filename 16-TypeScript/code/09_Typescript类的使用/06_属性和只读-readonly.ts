class Person{
  // 1.只读属性是可以在构造器中赋值，赋值之后就不可以再次修改
  // 2.属性本身是不可以在进行修改，但是如果他是对象类型，对象中的属性是可以修改的
  readonly name:string
  age?:number

  readonly friend?:Person

  constructor(name:string,friend?:Person){
    this.name=name
    this.friend=friend
  }
}

const p=new Person('coder',new Person('curry'))

console.log(p)
console.log(p.name)
console.log(p.friend)

// p.name='kobe'报错，不能再次修改

// 如果是对象类型,可以再次修改
if(p.friend){
  p.friend.age=18
}

export {}