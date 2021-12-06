//二叉搜索树的封装
class Node{
  constructor(key){
    this.key=key
    this.left=null
    this.right=null
  }
}

export class BinarySearchTree{
  constructor(){
    this.root=null
  }

  //二叉搜索树的插入操作
  insert(key){
    //创建一个新的节点
    const newNode=new Node(key)

    //遍历二叉搜索树，找到合适的位置添加
    if(this.root===null){
      this.root=newNode
    }else{
      this.insertNode(this.root,newNode)
    }
  }

  //二叉搜索树的遍历添加
  insertNode(root,newNode){
    if(root.key>newNode.key){//左边查找
     if(root.left===null){
      root.left=newNode
     }else{
       this.insertNode(root.left,newNode)
     }
    }else{
      //右边查找
      if(root.right===null){
        root.right=newNode
      }else{
        this.insertNode(root.right,newNode)
      }
    }
  }

  //二叉树的遍历
  //前序遍历，先遍历根节点，在遍历左子树，在遍历右子树
  preOrderTraversal(key){
    const result=[]
    this.preOrderTraversalNode(this.root,result)
    return result
  }

  preOrderTraversalNode(node,result){
    if(node===null){
      return result
    }
    result.push(node.key)
    this.preOrderTraversalNode(node.left,result)
    this.preOrderTraversalNode(node.right,result)
  }

  //中序遍历，左根右
  inOrderTraversal(key){
    const result=[]
    this.inOrderTraversalNode(this.root,result)
    return result
  }

  inOrderTraversalNode(node,result){
    if(node===null){
      return result
    }
    this.inOrderTraversalNode(node.left,result)
    result.push(node.key)
    this.inOrderTraversalNode(node.right,result)
  }

  //后序遍历，左右根
  postOrderTraversal(key){
    const result=[]
    this.postOrderTraversalNode(this.root,result)
    return result
  }

  postOrderTraversalNode(node,result){
    if(node===null){
      return result
    }
    this.postOrderTraversalNode(node.left,result)
    this.postOrderTraversalNode(node.right,result)
    result.push(node.key)
  }

  // search(key) 查找二叉搜索树中是否有相同的key，存在返回 true，否则返回 false
  search(key){
    return this.searchNode(this.root,key)
  }

  searchNode(node,key){
    if(node===null){
      return false
    }
    if(node.key>key){
      this.searchNode(node.left,key)
    }else if(node.key<key){
      this.searchNode(node.right,key)
    }else{
      return true
    }
  }

  // min() 获取二叉搜索树最小值
  min(){
    if(this.root===null){
      return null
    }
    let node=this.root
    while(node.left!==null){
      node=node.left
    }
    return node.key
  }

  // max() 获取二叉搜索树最大值
  max() {
    if(this.root===null){
      return null
    }
    let node=this.root
    while(node.right!==null){
      node=node.right
    }
    return node.key
  }

  //删除节点
  remove(key){

    let currentNode=this.root
    let parentNode=null
    let isLeftChild=false

    //遍历找到要删除的节点的位置，以及他的parentNode,isLeftChild
    while(currentNode.key!==key){
      parentNode=currentNode

      //小于，往左查找
      if(currentNode.key>key){
        isLeftChild=true
        currentNode=currentNode.left
      }else{
        //大于，往右查找
        isLeftChild=false
        currentNode=currentNode.right
      }

      // 找到最后都没找到相等的节点，返回 false
      if (currentNode === null) {
        return false
      }
    }

    //三种情况
    //1.要删除的节点是叶子节点
    //2.删除的节点只有一个子节点
    //3.删除的节点有两个子节点
    if(currentNode.left===null&&currentNode.right===null){
      //第一种情况
      if(currentNode===this.root){
        this.root=null
      }else if(isLeftChild){
        parentNode.left=null
      }else{
        parentNode.right=null
      }
    }else if(currentNode.right===null){
      //第二种情况,只存在左节点
      if(currentNode===this.root){
        this.root=currentNode.left
      }else if(isLeftChild){
        parentNode.left=currentNode.left
      }else{
        parentNode.right=currentNode.left
      }
    }else if(currentNode.left===null){
      //第二种情况,只存在右节点
      if(currentNode===this.root){
        this.root=currentNode.right
      }else if(isLeftChild){
        parentNode.left=currentNode.right
      }else{
        parentNode.right=currentNode.right
      }
    }else{
      //第三种情况
      //两种处理办法，一种是用后续节点的右节点的最小值，一种是左节点的最大值
      let successor=this.getSuccessor(currentNode)

      //判断是否为根节点
      if(currentNode===this.root){
        this.root=successor
      }else if(isLeftChild){
        parentNode.left=successor
      }else{
        parentNode.right=successor
      }

      // 将后续的左节点改为被删除的左节点
      successor.left = currentNode.left
    }
  }

  //获取后续节点的右节点的最小值
  getSuccessor(delNode){
    // 定义变量，保存要找到的后续
    let successor=delNode
    let successorParent=delNode
    let current=delNode.right

    //循环查找current的右子树节点
    while(current!==null){
      successorParent=successor
      successor=current
      current=current.left
    }

    // 判断寻找到的后续节点是否直接就是要删除节点的 right
    if (successor !== delNode.right) {
        successorParent.left = successor.right
        successor.right = delNode.right
    }
    return successor
  }
}
