class Person{
  name:string='coder'
  friend?:Person
  constructor(name:string,friend?:Person){
    this.name=name
    this.friend=friend
  }
}
const p=new Person('kobe',new Person('curry'))
console.log(p)

export {}