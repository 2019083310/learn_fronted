// ?1.react中的条件渲染和js中的一样，使用if判断或者条件运算符
import { Component } from "react"
// 例子1:
// function UserGreeting(props){
//   return <h1>Welcome back!</h1>
// }

// function GuestGreeting(props){
//   return <h1>Please sign up!</h1>
// }

// function Greeting(props){
//   const isLogin=props.isLogin
//   if(isLogin){
//     return <GuestGreeting></GuestGreeting>
//   }else{
//     return <UserGreeting></UserGreeting>
//   }
// }

// ?2.元素变量，你可以使用变量来存储元素，他可以帮助你有条件的渲染组件的一部分，而其他的部分并不会因此而改变。
// 例子2:
class LoginControl extends Component{
  constructor(props){
    super(props)
    this.state={isLogin:false}
  }

  handleLoginClick=()=>{
    this.setState({isLogin:true})
  }

  handleLogoutClick=()=>{
    this.setState({isLogin:false})
  }

  render(){
    const isLogin=this.state.isLogin
    let button;

    if(isLogin){
      button=<LogoutButton onClick={this.handleLogoutClick}></LogoutButton>
    }else{
      button=<LoginButton onClick={this.handleLoginClick}></LoginButton>
    }

    return (
      <div>
        <Greeting isLogin={isLogin}></Greeting>
        {button}
      </div>
    )
  }
}
function UserGreeting(props){
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props){
  return <h1>Please sign up!</h1>
}

function Greeting(props){
  const isLogin=props.isLogin
  if(isLogin){
    return <GuestGreeting></GuestGreeting>
  }else{
    return <UserGreeting></UserGreeting>
  }
}
function LoginButton(props){
  return (
    <button onClick={props.onClick}>Login</button>
  )
}
function LogoutButton(props){
  return (
    <button onClick={props.onClick}>Logout</button>
  )
}
// export default Greeting
export default LoginControl