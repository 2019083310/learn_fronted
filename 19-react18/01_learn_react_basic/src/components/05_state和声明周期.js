// 时钟clock案例
// 1.用props实现
// 通过props这样来做的话，如果props中的值改变，那么就会重新渲染
// function Clock(props){
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <h2>It is {props.date.toLocaleTimeString()}</h2>
//     </div>
//   )
// }

import {
  Component
} from "react";

// 2.通过state来实现
// state的三个注意点:
// 2.1不要直接修改state:this.state.xxx=xxx这是不正确的，应该使用this.setState()
// 2.2this.setState()方法是异步更新的，如果你设置this.setState({})接受一个对象更新，有可能会错误
// 但是如果是接受一个函数，函数接收参数为PrevState，上一个state中的数据，即使是异步更新也不会错误
// 2.3this.setState去更新state中的数据，是一个state对象的合并，这里和小程序的this.setData()是一样的，不过小程序是同步更新的
// 相当于this.setState({comments})以前state中的comments会被完全替换，而其它属性会被保留
// 2.4不管是父组件还是子组件他们都严格遵守单向数据流，他们不关心自己本身的props的值是谁传递过来的，并且props值是只读的
// 任何的 state 总是所属于特定的组件，而且从该 state 派生的任何数据或 UI 只能影响树中“低于”它们的组件。
// state为局部的，严格遵守单向数据流
class Clock extends Component {
  constructor(props){
    super(props)
    this.state={date:new Date()}
  }

  // 生命周期函数
  // componentDidMount在组件已经被渲染到DOM中后运行
  componentDidMount(){
    this.timerID=setInterval(()=>{
      this.tick()
    },1000)
  }

  componentWillUnmount(){
    clearInterval(this.timerID)
  }

  tick(){
    this.setState(prevState=>({
      date:new Date()
    }))
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

export default Clock