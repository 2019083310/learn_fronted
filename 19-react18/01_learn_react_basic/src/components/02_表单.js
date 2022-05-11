import {Component} from 'react'
// 在react中html表单元素的工作方式和其它的DOM元素有些不同，这是因为表单元素通常会保持一些内部的state
// todo 如果是一个简单地html表单和html元素一样，如下
function Table(){
  return (
    <form>
      <input type='text' name='name'></input>
      <input type='submit'></input>
    </form>
  )
}
// ?但大多数情况下，使用 JavaScript 函数可以很方便的处理表单的提交， 同时还可以访问用户填写的表单数据。
// todo 实现这种效果的标准方式是使用“受控组件”。
// 受控组件
// 我们可以把两者结合起来，使 React 的 state 成为“唯一数据源”。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。
// 被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。

class NameForm extends Component{
  constructor(props){
    super(props)
    this.state={value:''}
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleChange(e){
    // console.log(e)
    this.setState({
      value:e.target.value
    })
  }

  handleSubmit(e){
    alert('提交的名字:'+this.state.value)
    e.preventDefault()
  }

  render(){
    return (
      <form  onSubmit={this.handleSubmit} >
        <label>
          <input type='text' value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type='submit' value='提交'/>
      </form>
    )
  }
}

// 在html中textarea标签通过其子元素定义文本，而在react中通过value来定义文本
class EssayForm extends Component{
  constructor(props) {
    super(props);
    this.state={
      value:'请撰写一篇关于你喜欢的DOM元素的文章'
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({
      value:e.target.value
    })
  }
  handleSubmit(e){
    alert('提交的文章:'+this.state.value)
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea value={this.state.value} onChange={this.handleChange}></textarea>
        <input type='submit' value='提交' />
      </form>
    )
  }
}

// select组件
class FlavorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('你喜欢的风味是: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          选择你喜欢的风味:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}

// todo 处理多个输入
// 当需要处理多个 input 元素时，我们可以给每个元素添加 name 属性，并让处理函数根据 event.target.name 的值选择要执行的操作。
class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    // console.log(event)
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          参与:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          来宾人数:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
export default Reservation