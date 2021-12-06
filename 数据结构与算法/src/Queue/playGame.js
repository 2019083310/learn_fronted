import Queue from "./queue";

//封装击鼓传花游戏实现原理
export default function playGame(nameList,number){
  //1.New一个对象，把做游戏的人入队
  const queue=new Queue()

  //2.入队
  for(let name of nameList){
    queue.enqueue(name)
  }

  // 3、开始数数
  // 队列中只剩下 1 个元素时就停止数数
  while(queue.size()>1){
    //不用淘汰的重新添加到队列中,前number-1个
    for(let num=0;num<number-1;num++){
      queue.enqueue(queue.dequeue())
    }
    //把第number个淘汰
    // 由于队列没有像数组一样的下标值不能直接取到某一元素，
    // 所以采用，把 number 前面的 number - 1 个元素先删除后添加到队列末尾，
    // 这样第 number 个元素就排到了队列的最前面，可以直接使用 dequeue 方法进行删除
    queue.dequeue()
  }

  //4.获取剩下的唯一一个人
  const people=queue.front()

  //5.返回最后一个人的索引
  return nameList.indexOf(people)
}
