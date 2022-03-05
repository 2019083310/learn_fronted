// 封装一个单向链表

// 内部类(链表里的节点Node)
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    // 初始化链表的长度
    this.length = 0

    // 初始化head为Null,head指向链表的第一个节点
    this.head = null
  }

  // 链表的常见操作
  // append(data)项链表的尾部追加数据
  append(data) {
    // 1.创建新的节点
    const newNode = new Node(data)

    // 2.追加新的节点
    if (this.length === 0) {
      // 链表长度为0时，即只有head时
      this.head = newNode
    } else {
      // 链表长度大于0,在最后添加新的节点
      let currentNode = this.head

      // 当currentNode.next不为空时
      // 循环依次找最后一个节点,即next为null时
      while (currentNode.next !== null) {
        currentNode = currentNode.next
      }

      // 最后一个节点的Next指向新节点
      currentNode.next = newNode
    }

    // 3.追加完新节点，长度+1
    this.length++
  }

  // insert(data,position)在链表的指定位置追加数据
  insert(position, data) {
    // position新插入节点的位置
    // position为0表示插入第一个节点位置。。。以此类推

    // 1.对position进行节点判断
    if (position < 0 || position > this.length) return false

    // 2.创建新节点
    const newNode = new Node(data)

    // 3.插入节点
    if (position === 0) {
      // 让新节点指向原来的第一个节点
      newNode.next = this.head

      // head赋值为newNode
      this.head = newNode
    } else {
      // 0 < position <= length 的情况

      // 初始化一些变量
      let currentNode=this.head
      let index=0
      let previousNode=null

      // 在0-position之间遍历
      while(index++<position){
        previousNode=currentNode
        currentNode=currentNode.next
      }

      previousNode.next=newNode
      newNode.next=currentNode
    }

    // 更新链表长度
    this.length++
    return newNode
  }

  // getData(position)获取指定位置的data
  getData(position){
    // 1.position边界判断
    if(position<0||position>this.length) return false

    // 2.获取指定的position的data
    let currentNode=this.head
    let index=0

    while(index++<position){
      currentNode=currentNode.next
    }

    return currentNode.data
  }

  // indexOf(data)返回指定data的Index,如果没有则返回-1
  indexOf(data){
    let currentNode=this.head
    let index=0

    while(currentNode){
      if(currentNode.data===data){
        return index
      }

      currentNode=currentNode.next
      index++
    }

    return -1
  }

  // update(position,data)修改指定位置的节点的data
  update(position,data){
    // 涉及到position都要进行越界判断
    // 1.position越界判断
    if(position<0||position>this.length) return false

    // 2.通过循环遍历，找到指定的节点的data
    let currentNode=this.head
    let index=0
    while(index++<position){
      currentNode=currentNode.next
    }

    // 3.修改节点的data
    currentNode.data=data

    return currentNode
  }

  // removeAt(position)删除指定位置的节点，并返回删除的那个节点
  removeAt(position){
    // 1.position越界判断
    if(position<0||position>this.length) return false

    // 2.删除指定position位置的节点
    let currentNode=this.head
    let previousNode=null
    let index=0

    while(index++<position){
      previousNode=currentNode
      currentNode=currentNode.next
    }

    previousNode.next=currentNode.next

    // 3.更新链表的长度
    this.length--

    return currentNode
  }

  // remove(data)删除指定data的节点，并返回删除的那个节点
  remove(data){
    return this.removeAt(this.indexOf(data))
  }

  // isEmpty()判断链表是否为空
  isEmpty(){
    return this.length===0
  }

  size(){
    return this.length
  }

  toString(){
    let currentNode=this.head
    let result=''

    while(currentNode){
      result+=currentNode.data+' '
      currentNode=currentNode.next
    }

    return result
  }
}
