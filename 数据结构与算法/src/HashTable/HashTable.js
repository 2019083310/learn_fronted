//哈希表的封装实现

//1.设计哈希函数
export function hashFn(string, limit) {
  //这里使用幂的连乘的方式获取hashCode
  let hashCode = 0
  for (let item of string) {
    hashCode = hashCode * 37 + item.charCodeAt()
    //charCodeAt是用来获取字符串中每个字符的unicode编码的
    //for ... of这样就可以拿到每个字符串中的单个字符
  }
  return hashCode % limit
}

//2.设计判断一个数是否为质数
//下面这种算法比较性能低
// export function isPrime(number) {
//   if (number <= 1) {
//     return false
//   }
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return false
//     }
//   }
//   return true
// }

export function isPrime(number){
  if(number<=1||number===4){
    return false
  }
  const num=Math.ceil(Math.sqrt(number))
  for(let i=2;i<num;i++){
    if(num%2===0){
      return false
    }
  }
  return true
}

//3.哈希表的封装
//这里封装的处理冲突的方法是拉链法，在开发中拉链法也是最常用的
export class HashTable{
  //属性
  constructor(){
    this.storage=[]//哈希表的结构是基于数组实现的
    this.limit=7//哈希表的大小
    this.count=0//哈希表中的元素数量

    this.loadFactor=0.75//装填因子，用来判断是否要扩容
    this.minLoadFactor=0.25//小于0.25缩减哈希表的大小,大于0.75扩容
  }

  //方法

  //1.判断扩容的Number是否为质数
  getPrime(number){
    while(!isPrime(number)){
      number++
    }
    return number
  }

  //2.哈希表的插入和修改
  put(key,value){
    //首先要得到字符串的哈希后的索引
    const index=hashFn(key,this.limit)

    //接着判断索引处是否存在数组
    let bucket=this.storage[index]
    if(bucket===undefined){
      //创建这个拉链法的数组
      bucket=[]
      this.storage[index]=bucket
    }

    //如果已存在，检查是否存在key
    for(let i=0;i<bucket.length;i++){
      let tuple=bucket[i]
      if(tuple[0]===key){
        tuple[1]=value
        return
      }
    }

    //如果不存在就插入
    bucket.push([key,value])
    this.count++
    //还要判断哈希表是否要扩容
    if(this.count/this.limit>this.loadFactor){
      this.resize(this.getPrime(this.limit*2))
    }
  }

  //3.哈希表的删除操作
  remove(key){
    //获取哈希表对应的index
    const index=hashFn(key,this.limit)

    //获取bucket,判断是否存在
    const bucket=this.storage[index]
    if(bucket===undefined){
      return null
    }
    for(let i=0;i<bucket.length;i++){
      const tuple=bucket[i]
      if(tuple[0]===key){
        bucket.splice(i,1)
        this.count--

        // 根据装填因子的大小，判断是否要进行哈希表压缩
        if(this.count/this.limit<this.minLoadFactor&&this.limit>7){
          this.resize(this.getPrime(Math.floor(this.limit/2)))
        }
        return tuple
      }
    }
  }

  //4.根据Key获取哈希表中的value
  get(key){
    //获取key对应的index
    const index=hashFn(key,this.limit)

    //判断Index处的bucket是否存在
    const bucket=this.storage[index]
    if(bucket===undefined){
      //不存在这个元素
      return null
    }
    //找key
    for(let i=0;i<bucket.length;i++){
      const tuple=bucket[i]
      if(tuple[0]===key){
        return tuple[1]
      }
    }
    return null
  }

  //5.哈希表是否为空
  isEmpty(){
    return this.count===0
  }

  //6.哈希大小
  size(){
    return this.count
  }

  //7.哈希表的扩容
  resize(number){
    //保存旧的storage中的数组内容
    const oldStorage=this.storage

    //重置this.storage
    this.storage=[]
    this.count=0
    this.limit=number

    //遍历旧的storage，重新put到this.storage
    for(let bucket of oldStorage){
      if(bucket){
        for(let tuple of bucket){
          this.put(tuple[0],tuple[1])
        }
      }
    }
  }
}
