//封装一个ArrayList,并添加一些属性和方法
export class ArrayList{
  constructor(){
    this.array=[]
  }

  //将数据插入到数组中
  insert(item){
    this.array.push(item)
  }

  //toString方法
  toString(){
    return this.array.join('-')
  }

  //交换两个位置的数据
  swap(m,n){
    let temp=this.array[m]
    this.array[m]=this.array[n]
    this.array[n]=temp
  }

  //冒泡排序
  bubbleSort(){
    const length=this.array.length
    for(let j=length-1;j>=0;j--){
      for(let i=0;i<=j;i++){
        if(this.array[i]>this.array[i+1]){
          this.swap(i,i+1)
        }
      }
    }
  }

  //选择排序
  selectionSort(){
    const length=this.array.length
    for(let j=0;j<=length-1;j++){
      let min=j
      for(let i=min+1;i<=length-1;i++){
        if(this.array[min]>this.array[i]){
          min=i
        }
      }
      this.swap(min,j)
    }
  }

  //插入排序
  insertionSort(){
    const length=this.array.length
    //外层循环:从第二个数据开始，向左边的已经局部有序数据进行插入
    for(let i=1;i<=length-1;i++){
      //内层循环：获取i位置的元素，使用while循环(重点)与左边的局部有序数据依次进行比较
      let res=this.array[i]
      let j=i
      while(this.array[j-1]>res&&j>0){
        this.array[j]=this.array[j-1]//大的数据右移
        j--
      }
      //while循环结束后，index = j左边的数据变为局部有序且array[j]最大。
      //此时将array[j]重置为排序前的数据array[i]，方便下一次for循环
      this.array[j]=res
    }
  }

  //希尔排序
  shellSort(){
    const length=this.array.length
    //初始化分组增量
    let gap=Math.floor(length/2)

    //循环分组插入排序
    while(gap>=1){
      for(let i=gap;i<length;i++){
        let res=this.array[i]
        let j=i
        while(this.array[j-gap]>res&&j>gap-1){
          this.array[j]=this.array[j-gap]
          j-=gap
        }
        this.array[j]=res
      }
      gap=Math.floor(gap/2)
    }
  }
}

