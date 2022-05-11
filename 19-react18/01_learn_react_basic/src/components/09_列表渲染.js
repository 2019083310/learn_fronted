// ?列表渲染
// 和js中的数组一样，有很多循环遍历方法，map/filter/reduce/some/every/for/for ...in/for ...of/forEach
// todo 一般用map,官方文档中有说明，并且上面的只是我的想法
// todo 和vue或者是小程序一样，每个渲染的列表项都要有一个独一无二的key
// todo key的作用和vue一样，也是尽可能的复用，提高页面渲染效率，diff算法
const numbers=[1,2,3,4,5]
const listItems=numbers.map(number=>{
  return <li key={number.toString()}>{number}</li>
})
// console.log(listItems)

function NumberList(){
  return (
    <ul>
      {listItems}
    </ul>
  )
}

// key值在map的方法中需要设置，不在map方法中不设置
// todo key值在兄弟节点之间必须唯一
// ?数组元素中使用的 key 在其兄弟节点之间应该是独一无二的。
// ?然而，它们不需要是全局唯一的。当我们生成两个不同的数组时，我们可以使用相同的 key 值：
function Blog(props){
  const sidebar=(
    <ul>
      {props.posts.map((post)=>{
        return <li key={post.id}>
          {post.title}
        </li>
      })}
    </ul>
  )
  const content=props.posts.map((post)=>{
    return (
      <div>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    )
  })
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  )
}
// export default NumberList
export default Blog