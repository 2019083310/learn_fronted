class Person{
  // 1.在class中new Person相当于调用class内部的构造器constructor
  // 并且在constructor内部会返回一个类的实例对象
  // 如果没有constructor也会默认有一个constructor，并且返回一个默认的空对象
  
  //2.在ts中使用class，new Person也会调用constructor
  // 但是ts为了类型检测更加安全,会对this中的内容检测，发现没有name和age编译器会报错
  // 因此，我们需要在constructor外部声明 

  // 3.在constructor外部声明的方法会加入到Person.prototype中
  // 声明的属性会加入到constructor新创建的对象中
  // 因此，即使我们不在constructor中给对象初始化属性，在constructor外部，类的内部也会添加到返回的对象中

  //4.我们使用static关键字声明的属性和方法是Person的属性和方法
  // 调用方式：Person....
  
  // 5.class类在定义方法的时候不能用function的形式定义,因为class是用function定义的

  // 6.class类内部定义的属性和方法之间不要写逗号

  // 7.js中其实我们也是可以看成是对象也是有封装继承多态的三大特性，但是和传统对象的面向对象的三大特性不同
  // 这个看从那个角度理解
  // 多态，相同的方法在不同的情况下表现出不同的行为

  // 8.Typescript拥有class的特性，并且功能更多，包括对内部属性和方法的类型检测
  // 还有public/private/protected成员的修饰符,抽象类,多态

  // 9.Typescript成员修饰符，默认情况下都是public
  // public:类内部和实例对象都可以访问成员变量和方法
  // private:只有类的内部可以访问,实例对象也不可以直接访问
  // protected:只有内部或者子类可以访问，不能直接访问

  // 10.class类还有访问器方法还有个只读属性
  // setter/getter--存取器,可以用来监听一些属性的访问和存取，以及private定义的属性
  // readonly---确定值之后不能再修改,直接使用,但是如果他是对象类型，对象中的属性是可以修改的

  // 11.抽象类abstract
  // 12.类的类型type
  name:string
  age:number
  constructor(name:string,age:number){
    this.name=name
    this.age=age
  }

  eating(){}
}

export {} 