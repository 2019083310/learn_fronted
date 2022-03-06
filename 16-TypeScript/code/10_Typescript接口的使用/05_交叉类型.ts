// 一种组合类型的方式:联合类型
type CoderType=number|string

// 另一种组和类型的方式:交叉类型
// 表示两个类型都必须有
type CType=number&string
// 这种交叉类型主要用在接口的继承上面
// const num:CType='coder'

interface ISwim{
  swimming:()=>void
}

interface IFly{
  flying:()=>void
}

type MyType1=ISwim|IFly
type MyType2=ISwim&IFly

const obj1:MyType1={
  flying(){}
}

const obj2:MyType2={
  swimming(){},
  flying(){}
}

export {}
