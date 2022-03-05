// 栈结构的封装

export default class Stack {
  constructor() {
    this.items = []
  }

  // 进栈
  push(value) {
    this.items.push(value)
  }

  // 出栈
  pop() {
    if (this.isEmpty()) {
      console.log('栈空了')
    } else {
      return this.items.pop()
    }
  }

  //判断栈里是否有元素
  isEmpty() {
    return this.items.length === 0 ? true : false
  }

  // 长度
  size() {
    return this.items.length
  }

  // 取出栈顶元素
  getTop() {
    if (this.isEmpty) {
      console.log('栈空了')
    } else {
      return this.items[this.items.length-1]
    }
  }

}
