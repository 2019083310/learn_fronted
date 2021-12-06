//引入栈的数组形式的实现
import Stack from './stack'
//引入十进制转二进制的封装
import dec2bin from './dec2bin'

//栈的实现的测试
console.log('// ----- 栈结构测试 START -----//');
const stack=new Stack()

//Push测试
stack.push(20)
stack.push(10)
stack.push(18)
stack.push(56)
console.log(stack.items)

//pop测试
stack.pop()
console.log(stack.items)

//isEmpty测试
console.log(stack.isEmpty())

//size测试
console.log(stack.size())

//peek测试
console.log(stack.peek())

//toString测试
console.log(stack.toString())

//dec2bin的测试
console.log(dec2bin(100))//-->1100100
console.log(dec2bin(88)); //--> 1011000

console.log('// ----- 栈结构测试 END -----//');

