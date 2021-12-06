//封装链表的常见操作

// 创建一个新链表
export class NewNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

//封装实现链表的操作
export class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  //实现在链表末端插入数据
  append(data) {
    //创建一个新的节点
    const newNode = new NewNode(data)

    //循环在链表末端插入数据
    if (this.length === 0) {
      this.head = newNode
    } else {
      //如果长度不唯一，循环找到next为null的节点
      let currentNode = this.head
      while (currentNode.next !== null) {
        currentNode = currentNode.next
      }
      currentNode.next = newNode
    }
    // 3、追加完新节点后，链表长度 + 1
    this.length++
  }

  //实现在链表的任意位置插入数据
  insert(data, position) {
    //首先判断位置的合法性
    if (position < 0 || position > this.length) {
      return false
    }
    //创建一个新的节点
    const newNode = new NewNode(data)
    //1.如果position===0
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      //2.position不为0
      //循环从head开始找position的位置
      let index = 0
      let currentNode = this.head
      let previousNode = null
      while (index++ < position) {
        previousNode = currentNode
        currentNode = currentNode.next
      }
      //如果position===index
      newNode.next = currentNode
      previousNode.next = newNode
    }
    this.length++
    return newNode
  }

  //获取指定位置的data
  getData(position) {
    //1.判断位置的合法性
    if (position < 0 || position > this.length) {
      return false
    }
    // 2、获取指定 position 节点的 data
    let currentNode = this.head;
    let index = 0;

    while (index++ < position) {
      currentNode = currentNode.next
    }
    return currentNode.data
  }

  //indexOf(data) 返回指定 data 的 index，如果没有，返回 -1
  indexOf(data) {
    let currentNode = this.head
    let index = 0

    //循环遍历
    while (currentNode) {
      if (currentNode.data === data) {
        return index
      }
        currentNode = currentNode.next
        index++
    }
    return -1
  }

  //修改指定位置的数据
  update(position, data) {
    //1.判断位置的合法性
    if (position < 0 || position > this.length) {
      return false
    }
    //2.从head处开始找position节点
    let currentNode = this.head
    let index = 0
    while (index++ < position) {
      currentNode = currentNode.next
    }
    currentNode.data = data
    return currentNode
  }

  //删除位置的节点，并返回删除的那个节点
  removeAt(position) {
    //1.判断位置的合法性
    if (position < 0 || position > this.length) {
      return false
    }
    //2.循环遍历找节点
    let currentNode = this.head
    //position为0的情况
    if (position === 0) {
      this.head = this.head.next
    } else {
      let previousNode = null
      let index = 0

      while (index++ < position) {
        previousNode = currentNode
        currentNode = currentNode.next
      }
      previousNode.next = currentNode.next
    }
    this.length--
    return currentNode
  }

  // remove(data) 删除指定 data 的节点，并返回删除的那个节点
  remove(data){
    return this.removeAt(this.indexOf(data))
  }

  // isEmpty() 判断链表是否为空
   isEmpty() {
    return this.length === 0;
  }

  // size() 获取链表的长度
  size() {
    return this.length;
  }

  // toString() 链表数据以字符串形式返回
  toString(){
    let result=''
    let currentNode=this.head
    while(currentNode){
      result+=currentNode.data+' '
      currentNode=currentNode.next
    }
    return result
  }
}
