// Typescript支持两种模块化方式
// 1.EsModule或者是CommonJs
// 2.模块的命名空间:namespace---防止一些变量的命名冲突问题

// 比如下面这种方式就是会报错
// 但是使用命名空间之后就不会报错
// function format(){
//   return '2022-02-02'
// }

// function format(){
//   return '99'
// }

// 命名空间
// 如果想让外部访问使用export 
export namespace formatTime{
  export function format(){
    console.log('2022-02-02')
    
  }
}

export namespace formatPrice{
  export function format(){
    console.log('99');
    
  } 
}

// 使用方式
// formatTime.format()
// formatPrice.format()