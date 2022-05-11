import { Component } from "react"
// ?1-与运算符&&
// ?通过花括号包裹代码，你可以在jsx中嵌入表达式
function Mailbox(props){
  const unreadMessages=props.unreadMessages
  return (
    <div>
      <h1>Hello!</h1>
      {
        unreadMessages.length>0&&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  )
}

// ?2-三元运算符

// ?3-隐藏组件，直接让我们的render函数返回null
function WarningBanner(props){
  if(!props.warn){
    return null
  }

  return (
    <div className="warning">
      warning!
    </div>
  )
}

class Page extends Component{
  constructor(props){
    super(props)
    this.state={showWarning:true}
    this.handleToggleClick=this.handleToggleClick.bind(this)
  }

  handleToggleClick(){
    this.setState(state=>({
      showWarning:!state.showWarning
    }))
  }

  render(){
    return (
      <div>
        <WarningBanner warn={this.state.showWarning}></WarningBanner>
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning?'Hide':'Show'}
        </button>
      </div>
    )
  }
}

// export default Mailbox
export default Page