function sum(initAlNum: number, ...args:number[]) {
  let total=initAlNum
  for(const item of args){
    total+=item
  }

  return total
} 

console.log(sum(20,30))
// console.log(sum(20))
console.log(sum(20,30,40))
console.log(sum(20,30,40,50))

export { }