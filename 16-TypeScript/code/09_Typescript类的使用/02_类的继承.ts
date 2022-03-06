class Person{
  name:string
  age:number
  friend:string='kobe'

  constructor(name:string,age:number){
    this.name=name
    this.age=age
  }

  eating(){
    console.log('eating')
  }
}

class Teacher extends Person{
  sno:number

  constructor(name:string,age:number,sno:number){
    // super调用父类构造器
    super(name,age) 
    this.sno=sno
  }

  // 对父类方法进行重写
  eating(){ 
    // super调用父类方法
    super.eating()
    console.log('eat')
  }

  teaching(){
    console.log('teaching')
  }
}

class Student extends Person{
  title:string

  constructor(name:string,age:number,title:string){
    super(name,age)
    this.title=title
  }

  studying(){
    console.log('studying')
  }
}

const t=new Teacher('kobe',40,2019083310)
const s=new Student('curry',30,'third score')

console.log(t)
console.log(s)
t.eating()
s.eating()
t.teaching()
s.studying()
console.log(Person.prototype)

export {}