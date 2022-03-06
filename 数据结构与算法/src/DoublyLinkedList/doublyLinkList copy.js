// 封装一个双向链表

class Node {
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.length = 0
    this.tail = null
  }

  // 常见的操作
  // 在链表的尾部追加数据
  append(data) {
    // 1.创建一个节点
    const newNode = new Node(data)

    // 2.判断链表的长度
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      // ！！跟单向链表不同，不用通过循环找到最后一个节点
      // 巧妙之处
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }

    // 3.更新链表长度
    this.length++
  }

  // insert(position,data)在某个位置插入元素
  insert(position, data) {
    // 1.判断position的越界
    if (position < 0 || position > this.length) return false

    // 2.创建新的节点
    const newNode = new Node(data)

    // 3.判断插入情况
    if (position === 0) {//在第0个位置插入
      if (this.head === null) {
        this.head=newNode
        this.tail=newNode
      } else {
        newNode.next = this.head
        this.head.prev=newNode
        this.head = newNode
      }
    }else if(position===this.length){//在最后一个位置插入
      this.tail.next=newNode
      newNode.prev=this.tail
      this.tail=newNode
    }else{//在0-this.length-1位置中插入
      let previousNode=null
      let index=0
      let currentNode=this.head

      // 找到要插入的节点
      while(index++<position){
        previousNode=currentNode
        currentNode=currentNode.next
      }

      previousNode.next=newNode
      newNode.prev=previousNode
      newNode.next=currentNode
      currentNode.prev=newNode
    }

    this.length++
    return true
  }

  // getData(position)获得某个位置的节点值
  getData(position){
    // 边界判断
    if(position<0||position>this.length) return false

    // 定义一些变量
    let index=0
    let currentNode=this.head

    while(index++<position){
      currentNode=currentNode.next
    }

    return currentNode.data
  }

  // indexOf(data)获取指定data的位置
  indexOf(data){
    let currentNode=this.head
    let index=0

    while(currentNode){
      if(currentNode.data===data){
        return index
      }
      index++
      currentNode=currentNode.next
    }

    return -1
  }

  // removeAt(position)删除指定位置的节点
  removeAt(position){
    // Position越界判断
    if(position<0||position>this.length) return null

    // 不同情况判断
    if(position===0){
      if(this.length===1){
        this.head=null
        this.tail=null
      }else{
        this.head=this.head.next
        this.head.prev=null
      }
    }else if(position===this.length-1){
      this.tail=this.tail.prev
      this.tail.next=null
    }else{
      // 删除0-this.length-1
      let index=0
      let currentNode=this.head
      let previousNode=null

      while(index++<position){
        previousNode=currentNode
        currentNode=currentNode.next
      }

      // 交换节点信息
      previousNode.next=currentNode.next
      currentNode.next.prev=previousNode
    }

    this.length--
    return currentNode
  }

  // update(position,data)更新指定位置位置的数据
  update(position,data){
    // 1.删除Position位置的节点
    const result=this.removeAt(position)

    // 2.在position位置添加新的节点
    this.insert(position,data)

    return result
  }

  // remove(data)删除指定data的所在节点
  remove(data){
   return this.removeAt(this.indexOf(data))
  }

  // isEmpty()判断链表是否为空
  isEmpty(){
    return this.length===0
  }

  // size()
  size(){
    return this.length
  }
}
