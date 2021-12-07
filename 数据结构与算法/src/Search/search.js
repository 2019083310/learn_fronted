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
//快速排序
function swap2(arr,m,n){
  let temp=arr[m]
  arr[m]=arr[n]
  arr[n]=temp
}

//选择枢纽
function median(arr){
  let center=Math.floor(arr.length-1)
  let left=0
  let right=arr.length-1

  //判断大小并进行交换
  if(arr[left]>arr[center]){
    swap2(arr,left,center)
  }
  if(arr[center]>arr[right]){
    swap2(arr,center,right)
  }
  if(arr[left]>arr[right]){
    swap(arr,left,right)
  }

  return center
}

function quickSort(arr){
  if(arr.length===0){
    return []
  }
  let center=median(arr)
  let c=arr.splice(center,1)
  let l=[]//存放比枢纽小的值
  let r=[]//存放比枢纽大的值

  for(let i=0;i<arr.length;i++){
    if(arr[i]<c){
      l.push(arr[i])
    }else{
      r.push(arr[i])
    }
  }

  // 递归调用`QuickSort`函数实现了枢纽`Center`左边数据`l`和右边数据`r`的排序
  return quickSort(l).concat(c,quickSort(r))
}

let arr=[1,2,4,8,9,40,89,110,26]
console.log(quickSort(arr))

