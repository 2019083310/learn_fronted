import Queue from './queue'

import playGame from './playGame'
//对封装的队列的测试
console.log('--------队列的封装测试开始了-------')

const queue=new Queue()

//入队测试
queue.enqueue(0)
queue.enqueue(1)
queue.enqueue(2)
console.log(queue.items)

//出队测试
queue.dequeue()
console.log(queue.items)

//长度测试
console.log(queue.size())

//是否为空测试
console.log(queue.isEmpty())

//输出位字符串
console.log(queue.toString())

//获取对手元素
console.log(queue.front())


//击鼓传花游戏的测试
const nameList=['liu','li','zhang','san','si']
console.log(playGame(nameList,3))
