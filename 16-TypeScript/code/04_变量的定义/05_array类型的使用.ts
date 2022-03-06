// 确定一个事实,arr是一个数组，但是数组中存放的是什么类型的元素？
// 默认情况下，如果不指定，数组中存放任意类型的元素，这是不推荐的

const arr=[]
// 存放任意类型不会报错
arr.push(1)
arr.push('1')

// 指定数组存放类型的方式
// 规定必须是字符串类型
const newArr:string[]=[]
// 或者   这种方式不推荐，和jsx模板是冲突的
const newArr2:Array<string>=[]
newArr.push('1')
// newArr.push(1)//编译器报错
