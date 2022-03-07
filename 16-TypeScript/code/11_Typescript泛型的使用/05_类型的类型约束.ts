interface ILength{
  length:number
}

function getLength<T extends ILength>(arg:T){
  return arg.length
}

// getLength(2)//报错
getLength('abc')
getLength(['kobe'])
getLength({length:10})