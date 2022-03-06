interface ISwim{
  swimming:()=>void
}

interface IEat{
  eating:()=>void 
}

// 类实现接口
class Animal{

}

// 继承:只支持单继承
// 实现:实现接口，类可以实现多个接口
class Fish extends Animal implements IEat,ISwim{
  swimming(){
    console.log('Fish Swimming')
  }
  eating(){
    console.log('FishEating')
  }
}

// 编写一些公共的API:面向接口编程
function swimAction(swimable:ISwim){
  swimable.swimming()
}

swimAction(new Fish())
swimAction({swimming:function(){}})