class Person{
  private _name:string='kobe'

  get name(){
    return this._name
  }

  set name(newName:string){
    this._name=newName
  }
}

const p=new Person()
console.log(p)
console.log(p.name)

export {}