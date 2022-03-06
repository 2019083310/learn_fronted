// union type---表示两个或多个类型组成的类型
// 那么这个类型可以是其中任意一种即可

function printId(id:number|string|boolean){

}

// 都是成立的以下几种
printId(1)
printId(false)
printId('abs')

export {}