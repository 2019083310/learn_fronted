// 组件便于我们提高代码的可维护性和可复用性
// 组件分为两种:函数组件和类组件
// import {Component} from 'react'

// 1.函数组件
// 这就是最简单的函数组件的编写方式
// function Welcome(){
//   return <div>你好啊,李银河</div>
// }

// 2.class类组件
// 他和函数式组件是等价的
// class Welcome extends Component{
//   render(){
//     return (
//       <div>呵呵呵</div>
//     )
//   }
// }

// 3.props是当我们自定组件的时候，在自定义组件上的属性会被转化为js对象传递给组件，成为props
// 注意:react中有纯函数的概念，不允许修改props,但是state是可以被修改的
// function Welcome(props){
//   return <div>
//     <h2>你好啊,{props.name}</h2>
//     {/* props:{name:'curry',age:20} */}
//     <h2>{console.log(props)}</h2>
//   </div>
// }

// 4.组件可以组合
function Welcome1(){
  return <div>你好啊,李银河</div>
}

function Welcome(){
  return (
    <div>
      <Welcome1></Welcome1>
    </div>
  )
}

// 5.组件也可以被拆分
export default Welcome