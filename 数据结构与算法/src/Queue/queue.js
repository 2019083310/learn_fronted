//基于数组形式实现队列的封装

export default class Queue{
  constructor(){
    this.items=[]
  }

  //入队，进队
  enqueue(element){
    this.items.push(element)
  }

  //出队
  dequeue(){
    return this.items.shift()

  }

  //判断队列是否为空
  isEmpty(){
    return this.items.length===0
  }

  //队列的长度
  size(){
    return this.items.length
  }

  //获取队首的元素
  front(){
    return this.items[0]
  }

  //转为字符串形式
  toString(){
    let result=''
    for(let item of this.items){
      result+=item+' '
    }
    return result
  }
}
