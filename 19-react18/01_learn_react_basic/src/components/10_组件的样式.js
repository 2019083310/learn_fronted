// 组件的样式
// react推荐我们把组件的样式写在组件的内部，因为引入外部的css实际上，webpack会帮我们把外部的css文件
// 插入到style中，这样就变成了全局样式文件
// 另外:class要写成className效果和class一样，只不过在react中我们要遵守规矩
// style要写成一个对象，而不是一个字符串
import '../assets/style/basic.css'
function Title(){
  const obj={
    backgroundColor:'#bfc'
  }
  return (
    <div>
      <h1 style={obj}>哈哈哈</h1>
      <h2 style={{backgroundColor:'orange'}}>呵呵呵</h2>
      <h2 className="active">嘻嘻嘻</h2>
      {/* 报错下面的代码是错误的 */}
      {/* <h2 style='{color:"#ccc"}'>嘿嘿嘿</h2> */}
    </div>
  )
}

export default Title