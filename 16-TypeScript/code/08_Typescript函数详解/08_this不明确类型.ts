type ThisType={name:string}
function eating(this:ThisType,message:string){
  console.log(this.name,message)
}

const info={
  name:"kobe",
  eating
}

// 隐士绑定
info.eating('哈哈哈')

// 显示绑定
eating.apply({name:'curry'},['呵呵呵'])

export {}