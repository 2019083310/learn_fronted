// 在不想给某些JavaScript添加具体的数据类型时(原生的JavaScript代码是一样)

let message:any='coder'

message=1
message=true
message=null

// 但是any在开发中是很讨厌的

const arr:any[]=['any']

export {}