class Point<T,E,O>{
  x:T
  y:E
  z:O
  constructor(x:T,y:E,z:O){
    this.x=x
    this.y=y
    this.z=z
  }
}

// 方式一：类型推导
const p1=new Point('coder',18,false)

// 方式二：传递参数
const p2=new Point<string,number,boolean>('coder',18,false)

// 方式三
const p3:Point<string,number,number>=new Point('coder',18,1.88)