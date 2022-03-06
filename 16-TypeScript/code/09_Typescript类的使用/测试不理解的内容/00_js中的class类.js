class Student{
  constructor(name,age){
    this.name=name
    this.age=age
  }
  height=1.88
  eating(){

  }
}

const s=new Student('coder',18)
console.log(s)
console.log(Student.prototype)
// console.log(Student.height)//undefined