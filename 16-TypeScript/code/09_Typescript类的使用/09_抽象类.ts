abstract class Shape{
  abstract getArea():number
}

class Rectangle extends Shape{
  private width:number
  private height:number

  constructor(width:number,height:number){
    super()
    this.width=width
    this.height=height
  }

  getArea(): number {
    return this.width*this.height
  }
}

class Circle extends Shape{
  private r:number

  constructor(r:number){
    super()
    this.r=r
  }

  getArea(): number {
    return this.r*this.r*Math.PI
  }
}
const rectangle=new Rectangle(20,30)
const circle=new Circle(10)

function makeArea(shape:Shape){
  return shape.getArea()
}

console.log(makeArea(rectangle))
console.log(makeArea(circle))

export {}