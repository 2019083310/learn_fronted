// react中的事件处理也一样，在元素上绑定onClick事件，命名采用小驼峰
// 计数器案例
import {Component} from 'react'

class Counter extends Component{
  constructor(props){
    super(props)
    this.state={counter:0}
    //1. react的class组件的回调函数中如果想要使用this,必须这样绑定this
    // this.increment=this.increment.bind(this)
    // this.decrement=this.decrement.bind(this)
    //2.或者把回到函数改为箭头函数，这是实验特性
    //3.或者在绑定事件改为一个getter函数,但是不建议这样使用，通常建议使用前两种方式，第三种方式会有一些问题
  }

  increment=(arg,e)=>{
    console.log(arg)
    this.setState((prevState)=>({
      counter:prevState.counter+1
    }))
    // console.log(this)
    // console.log(e)
  }

  decrement=(e)=>{
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
        {/* 1.绑定方式 */}
        {/* 在react中一般不需要使用addEventListener，直接使用{}绑定回调函数即可，回到函数直接在类中声明 */}

        {/* 2. this绑定方式*/}
        {/* 2.1改为getter函数版本---不推荐,因为每次都会重新渲染回调 */}
        {/* <button onClick={()=>this.increment()}>+1</button>
        <button onClick={()=>this.decrement()}>-1</button> */}
        {/* 2.2 不改为getter函数版本 */}
        {/* <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button> */}

        {/* 3.传递参数的方式只能通过箭头函数或者bind */}
        {/* 3.1箭头函数，e都必须作为最后一个参数且必须显示指定 */}
        {/* <button onClick={(e)=>this.increment('1',e)}>+1</button>
        <button onClick={(e)=>this.decrement('2',e)}>-1</button> */}
        {/* 3.2绑定bind ,这种情况下不用显示指定e*/}
        <button onClick={this.increment.bind(this,'1')}>+1</button>
        <button onClick={this.decrement.bind(this,'2')}>-1</button>
      </div>
    )
  }
}

export default Counter