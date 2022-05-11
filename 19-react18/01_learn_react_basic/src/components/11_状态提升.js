import {Component} from 'react'
// ?我们可以将多个组件中需要共享的数据提升到公共的父组件中
// todo 创建一个用于计算水在给定温度下是否会沸腾的温度计算器

// 他接受一个celsius温度作为一个prop
function BoilingVerdict(props){
  if(props.celsius>=100){
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}

// 输入框，输入温度
const scaleNames={
  c:'Celsius',
  f:'Fahrenheit'
}

// 编写转换函数
function toCelsius(fahrenheit){
  return (fahrenheit-32)*5/9
}

function toFahrenheit(celsius){
  return (celsius*9/5)+32
}

function tryConvert(temperature,convert){
  const input=parseFloat(temperature)
  if(Number.isNaN(input)){
    return ''
  }
  const output=convert(input)
  const rounded=Math.round(output*1000)/1000
  return rounded.toString()
}

// 输入框组件
class TemperatureInput extends Component{
  constructor(props){
    super(props)
    // Before:this.state={temperature:''}
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(e){
    // Before:数据共享之前
    // this.setState({
    //   temperature:e.target.value
    // })
    
    //?实现数据共享要做的就是优受控组件实现
    this.props.onTemperatureChange(e.target.value) 
  }

  render(){
    // Before:const temperature=this.state.temperature
    // After:如下，props中的属性是只读的
    const temperature=this.props.temperature
    const scale=this.props.scale
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}</legend>
        <input type='text' value={temperature} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

// 我们希望两个输入框内的数值彼此能够同步。当我们更新摄氏度输入框内的数值时，华氏度输入框内应当显示转换后的华氏温度，反之亦然。
class Calculator extends Component{
  constructor(props){
    super(props)
    this.state={temperature:'',scale:'c'}
    this.handleCelsiusChange=this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange=this.handleFahrenheitChange.bind(this)
  }

  handleCelsiusChange(temperature){
    this.setState({temperature,scale:'c'})
  }

  handleFahrenheitChange(temperature){
    this.setState({temperature,scale:'f'})
  }

  render(){
    const scale=this.state.scale
    const temperature=this.state.temperature
    const celsius=scale==='f'?tryConvert(temperature,toCelsius):temperature
    const fahrenheit=scale==='c'?tryConvert(temperature,toFahrenheit):temperature
    
    return (
      <div>
        <TemperatureInput 
          scale='c' 
          temperature={celsius} 
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput 
          scale='f' 
          temperature={fahrenheit} 
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    )
  }
}
export default Calculator