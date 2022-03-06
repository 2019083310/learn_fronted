let foo=null
const bar=undefined

foo=2//不会报错

// 注意：默认情况下，null和undefined的类型推导是any，可以是任意数据类型
// 如果必须是null和undefined自己指定
const test:null=null

// test=1//会报错