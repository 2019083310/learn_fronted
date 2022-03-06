// console.log(1)

// throw new Error('123')

// console.log(2)

// function foo():never{
//   while(true){
//     //死循环
//   }
// }

// 应用场景
function handleMessage(message:string|number|boolean){
  switch(typeof message){
    case 'string':
      console.log('string处理方式')
      break
    case 'number':
      console.log('number处理方式')
      break
    case 'boolean':
      console.log('boolean处理方式')
      break
    default:
      const check:never=message
  }
}

handleMessage('abc')
handleMessage(123)
handleMessage(true)