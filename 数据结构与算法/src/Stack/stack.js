//栈结构的封装

export default class Stack{
  constructor(){
    this.items=[]
  }

  //入栈、进栈
  push(element){
    this.items.push(element)
  }

  //出栈
  pop(){
    if(this.isEmpty()){
      console.log('栈空了')
    }else{
      return this.items.pop()
    }
  }

  //判断栈中是否有元素
  isEmpty(){
    return this.items.length===0
  }

  //返回栈顶元素
  peek(){
    if(this.isEmpty()){
      console.log('栈空!')
    }
    return this.items[this.items.length-1]
  }

  //返回栈中元素的长度
  size(){
    return this.items.length
  }

  //将栈中元素以字符串形式输出
  toString(){
    let result=''
    for(let item of this.items){
      result+=item+' '
    }
    return result
  }
}
