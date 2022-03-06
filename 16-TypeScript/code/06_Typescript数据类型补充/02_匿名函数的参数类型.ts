// 通常情况下，都会给函数的参数加上类型注解的
function foo(message: string) {

}

const names = ['abc', 'cba', 'nba']
names.forEach(item => {//这里我们并没有给item加上类型注解
  // 但是我们看到item是一个string类型
  // 这就是匿名函数与普通函数的不同
  // 这种方式叫做上下文自动类型推断
  console.log(item)
  // item根据上下文的环境推导出来的, 这个时候可以不添加的类型注解
  // 上下文中的函数: 可以不添加类型注解
})