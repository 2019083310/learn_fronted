// interface和class一样支持继承
// 而且class只支持单一继承
// 但是接口支持多继承
interface ISwim{
  swimming:()=>void
}

interface IFly{
  flying:()=>void
}

interface IAction extends ISwim,IFly{
  // 这里不支持方法的重写，只是规定类型，不允许重复定义
  // flying:(num:number)=>void
}

const action:IAction={
  swimming(){

  },
  flying(){

  }
}