// symbol原始数据类型，用来生成独一无二的键
const name1:symbol=Symbol('aaa')
const name2=Symbol('aaa')

// name1=1//报错

const info2={
  [name1]:'coder',
  [name2]:'coder'
}
export {}