// this是可以被推导出来的
// const name='curry'
const info={
  name:'kobe',
  eating(){
    console.log(this.name+' eating')    
  }
}

info.eating()

// 下面这种会报错
// const result=info.eating
// result()

export {}