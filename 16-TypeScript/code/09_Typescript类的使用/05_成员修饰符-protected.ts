class Person{
  protected name:string='kobe'
}

class Student extends Person{
  getName(){
    return this.name
  }
}

const p=new Person()

console.log(p)
// console.log(p.name)也会报错，只有内部或者子类可以访问，不能直接访问

export {}