// 当前foo函数, 在被其他地方调用时, 没有做任何的参数校验
// 1> 没有对类型进行校验
// 2> 没有对是否传入参数进行校验
function foo(mes) {
  console.log(mes.length)
}

foo('abc')

// 这就是js中的类型检测带来的问题
foo() //TypeError: Cannot read properties of undefined (reading 'length')

// 而且一旦报错，后面的渲染页面的代码就都不会执行，会造成很大的问题
// 这个时候如果我们能够规范函数中传入的类型变量是什么类型，就可以在ide编译的时候发现错误
// 能够提高应用程序的安全性，代码的健壮性