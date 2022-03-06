// 枚举类型必须用enum关键字定义
// 指的是把一些可能用到的值列举出来，放到一个类型中
// 一般放一些常量，大写(推荐)
enum Direction{
  LEFT,//0
  RIGHT,//1
  TOP,//2
  BOTTOM//3
}

//Direction.LEFT===0
function changeDirection(direction:Direction){
  console.log(direction)
  switch(direction){
    case 0:
      console.log('向左')
      break
    case Direction.RIGHT:
      console.log('向右')
      break
    case Direction.TOP:
      console.log('向上')
      break
    case Direction.BOTTOM:
      console.log('向下')
      break
  }
}

changeDirection(Direction.LEFT)
changeDirection(Direction.RIGHT)
changeDirection(Direction.TOP)
changeDirection(Direction.BOTTOM)

export {}