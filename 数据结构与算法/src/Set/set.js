//封装set集合类

export default class Set{
  constructor(){
    this.items={}
  }

  //添加集合元素add方法
  add(value){
    //判断集合中的元素是否存在
    if(this.has(value)){
      return false
    }
    this.items[value]=value
    return true
  }

  //判断集合中的元素是否存在
  has(value){
    return this.items.hasOwnProperty(value)
  }

  // remove(value) 删除集合中指定的 value
  remove(value){
    //判断是否存在这个元素
    if(!this.has(value)){
      return false
    }
    delete this.items[value]
    return true
  }

  // clear() 清空集合中所有 value
  clear(){
    this.items={}
  }

  // size() 获取集合中的 value 个数
  size() {
    return Object.keys(this.items).length;
  }

  // values() 获取集合中所有的 value
  values(){
    return Object.keys(this.items)
  }

  // ------- 集合间的操作 ------- //
  // union() 求两个集合的并集
  union(otherSet){
    //创建一个新的集合
    let unionSet=new Set()

    //遍历当前集合获取所有的value，并添加到新集合中
    for(let value of this.values()){
      unionSet.add(value)
    }
    //遍历另一个集合获取所有的value，添加到新集合中
    for(let value of otherSet.values()){
      unionSet.add(value)
    }
    return unionSet
  }

  // intersection() 求两个集合的交集
  intersection(otherSet){
    //创建一个新的集合
    let interSet =new Set()

    //遍历当前集合获取的value，和另一个集合中的value做比较
    for(let value of this.values()){
      if(otherSet.has(value)){
        interSet.add(value)
      }
    }

    return interSet
  }

  // difference() 差集
  difference(otherSet){
    //创建一个新的集合
    let diffSet=new Set()

    //遍历当前集合获取Value,和拎一个集合中的value做比较
    for(let value of this.values()){
      if(!otherSet.has(value)){
        diffSet.add(value)
      }
    }

    return diffSet
  }

  // subset() 子集
  subset(otherSet){
    for(let value of this.values()){
      if(!otherSet.has(value)){
        return false
      }
    }
    return true
  }
}
