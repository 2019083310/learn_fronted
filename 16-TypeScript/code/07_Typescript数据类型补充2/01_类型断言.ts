// 正常情况下，我们拿到的元素是一个html元素，可以使用Element的属性和方法
// 但是如果是一个图片元素，我们想要使用src属性的时候就必须知道元素的具体类型
// const el=document.getElementById('coder')

// el.innerHTML='coder liu'

// 这种情况下ts编译器就不会报错
const el=document.getElementById('coder') as HTMLImageElement

el.src='url地址'

// 另外案例
class Person{

}

class Student extends Person{
  studying(){

  }
}

function sayHello(p:Person){
  (p as Student).studying()
}
const stu=new Student()

sayHello(stu)

// 案例3 as any/unknown
let message='hello'
// 如果我们想要给message赋值为其他类型，可以类型断言
let num:number=(message as any) as number

export {}
