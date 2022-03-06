class Person{
  name:string
  age:number
  height:number=1.88

  constructor(name:string,age:number,height?:number){
    this.name=name
    this.age=age
    // this.height=height
  }

  eating(){
    console.log('eating')
  }
}

const p=new Person('coder',18)
console.log(p)
console.log(Person.prototype)


export {}
