// 字典结构的封装
export default class Map {
  constructor(){
    this.items={}
  }

  //has(key)判断字典里是否存在某个key
  has(key){
    return this.items.hasOwnProperty(key)
  }

  //set(key,value)在字典里添加键值对
  set(key,value){
    if(this.has(key)){
      return false
    }
    this.items[key]=value
  }

  //remove(key) 在字典中删除指定的 key
  remove(key){
    if(!this.has(key)){
      return false
    }
    delete this.items[key]
  }

  // get(key) 获取指定 key 的 value，如果没有，返回 undefined
  get(key){
    if(!this.has(key)){
      return undefined
    }
    return this.items[key]
  }

  // 获取所有的 key
  keys(){
    return Object.keys(this.items)
  }

   // 获取所有的 value
   values(){
     return Object.values(this.items)
   }

   // size() 获取字典中的键值对个数
   size(){
     return Object.keys(this.items).length
   }

   // clear() 清空字典中所有的键值对
  clear() {
    this.items = {};
  }

}
