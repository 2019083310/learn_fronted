//引入栈的封装
import Stack from './stack'

//实现十进制转为二进制
function dec2bin(decNumber){
  const stack2 =new Stack()

  //循环把十进制的余数存入栈中
  while(decNumber>0){
    stack2.push(decNumber%2)
    decNumber=Math.floor(decNumber/2)//向下取整
  }

  //取出栈中的余数
  let result=''
  while(!stack2.isEmpty()){
    result+=stack2.peek()
  }
  return result
}

export default dec2bin
