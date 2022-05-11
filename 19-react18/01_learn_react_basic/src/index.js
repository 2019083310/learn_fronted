// 从 react 的包当中引入了 React。
// 只要你要写 React.js 组件就必须引入React, 因为react里有 一种语法叫JSX，稍后会讲到JSX，要写JSX，就必须引入React
// import React ,{Component} from 'react'

// ReactDOM 可以帮助我们把 React 组件渲染到页面上去，没有其它的作用了。
// 它是从 react-dom 中 引入的，而不是从 react 引入。
import {createRoot} from 'react-dom/client'

// import Table from './components/02_表单'
// import Welcome from './components/04_组件和props'
// import Clock from './components/05_state和声明周期'
// import Counter from './components/06_事件处理'
// import LoginControl from './components/07_条件渲染'
// import Mailbox from './components/08_条件渲染简洁方式'
// import Blog from './components/09_列表渲染'
// import Title from './components/10_组件的样式'
import Calculator from './components/11_状态提升'

// ReactDOM里有一个render方法，功能就是把组件渲染并且构造 DOM 树，然后插入到页面上某个特定的 元素上
// class Header extends Component {
//   render() {
    // 这里就比较奇怪了，它并不是一个字符串，看起来像是纯 HTML 代码写在 JavaScript 代码里面。
    // 语 法错误吗？这并不是合法的 JavaScript 代码, “在 JavaScript 写的标签的”语法叫 JSX- JavaScript XML。
//     return ( 
//       <div>
//         <LoginControl></LoginControl>
//       </div>
//     )
//   }
// }
const root=createRoot(document.querySelector('#root'))

// function tick(){
// }
// setInterval(tick,1000)
// const messages=['React','Re:React','Re:Re:React']
// const posts=[{id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
// {id: 2, title: 'Installation', content: 'You can install React from npm.'}]
root.render(
  <Calculator></Calculator>
)
// console.log('learn react start')