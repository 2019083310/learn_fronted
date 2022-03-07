declare module 'lodash'{
  export function join(args:any[]):void
}

// 定义变量函数类型
declare let name:string
declare let age:number
declare let height:number

declare function foo():void

declare class Person{
  name:string
  age:number
  height:number

  constructor(name:string,age:number,height:number)
}

// 声明文件
declare module '*.jpg'
declare module '*.png'
declare module '*.gif'
declare module '*.svg'
declare module '*.jpeg'

// 声明命名空间
declare namespace ${
  export function ajax():void
}