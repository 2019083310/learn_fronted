class Animal{
  action(){
    console.log('animal running')
  }
}

class Dog extends Animal{
  // 方法重写
  action(): void {
    console.log('dog running')
  }
}

class Fish extends Animal{
  action(){
    console.log('fish swimming')
  }
}

// animal:dog/fish
// 传统面向对象的三大特性:
// 继承是多态的前提
// 父类引用指向子类对象
// 相同的函数对不同的参数表现出不同的行为
function makeActions(animals:Animal[]){
  animals.forEach(animal=>{
    animal.action()
  })
}

makeActions([new Dog(),new Fish()])