class Person{
  private name:string=''
  getName(){
    return this.name
  }

  setName(newName:string){
    this.name=newName
  }
}

const p=new Person()
// console.log(p.name)//编译器报错，private只有类的对象内部可以访问
console.log(p)
console.log(p.getName())
p.setName('coder')
console.log(p)

export {}