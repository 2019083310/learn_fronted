// 1.typeof方式的类型缩小
type IDType=number|string
function printId(id:IDType){
  if(typeof id==='number'){
    console.log(id)//类型：number
  }else{
    console.log(id)//类型:string
  }
}

// 2.平等运算符缩小(===/==/switch/case/!=/!==)
type Direction='left'|'right'|'top'|'bottom'
function printDirection(direction:Direction){
  // if判断
  // switch判断
  switch(direction){
    case 'left':
      console.log(direction)
      break
    case 'right':
      console.log(direction)
      break
    case 'top':
      console.log(direction)
      break      
    case 'bottom':
      console.log(direction)
      break
    default:
      console.log('')
  }
}

// 3.instanceof缩小
function printTime(time:string|Date){
  if(time instanceof Date){
    console.log(time)
  }else{
    console.log(time)
  }
}

// 4.in操作符
type Fish={
  swim:()=>void
}

type Dog={
  run:()=>void
}

function walk(animal:Fish|Dog){
  if('swim' in animal){
    console.log(animal)
  }else{
    console.log(animal)
  }
}

const fish:Fish={
  swim(){
    console.log('swim')
  }
}

walk(fish)
