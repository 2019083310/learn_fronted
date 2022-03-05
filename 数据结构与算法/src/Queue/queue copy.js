// 队列的数组实现

export default class Queue{
  constructor(){
    this.items=[]
  }

  // 入队列
  enqueue(value){
    this.items.push(value)
  }

  // 出队列
  dequeue(){
    if(!this.items.length){
      return
    }else{
      this.items.shift()
    }
  }

  // 判断是否为空
  isEmpty(){
    return this.items.length===0
  }

  // 队列的长度
  size(){
    return this.items.length
  }

  // 取出队首元素
  getTop(){
    return this.items[0]
  }

  // toString操作
  toString(){
    let result=''
    result+=this.items.join('')
    return result
  }
}
