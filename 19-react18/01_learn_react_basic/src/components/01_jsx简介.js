// 计数器案例
// 注意:组件的名称必须大写开头，否则react会把它当做html元素
import {Component} from 'react'

class Counter extends Component{
  constructor(props){
    super(props)
    this.state={counter:0}
    // react的class组件的回调函数中如果想要使用this,必须这样绑定this
    this.increment=this.increment.bind(this)
    this.decrement=this.decrement.bind(this)
  }

  increment(e){
    this.setState((prevState)=>({
      counter:prevState.counter+1
    }))
    // console.log(this)
    // console.log(e)
  }

  decrement(e){
    this.setState((prevState)=>({
      counter:prevState.counter-1
    }))
    // console.log(this)
    // console.log(e)
  }

  render(){
    return (
      <div>
        <h2>{this.state.counter}</h2>
        {/* 在react中一般不需要使用addEventListener，直接使用{}绑定回调函数即可，回到函数直接在类中声明 */}
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
      </div>
    )
  }
}

export default Counter