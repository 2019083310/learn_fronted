/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const items = []

  // for(let i=0;i<s.length;i++){
  //     const ch=s[i]
  //     if(ch==='('||ch==='{'||ch==='['){
  //         items.push(ch)
  //     }else{
  //         let e=items[items.length-1]
  //         if(e==='('&&ch===')'||e==='{'&&ch==='}'||e==='['&&ch===']'){
  //             items.pop()
  //         }else{
  //             return false
  //         }
  //     }
  // }
  for (const ch of s) {
    if (ch === '(' || ch === '{' || ch === '[') {
      items.push(ch)
    } else {
      let e = items[items.length - 1]
      if (e === '(' && ch === ')' || e === '{' && ch === '}' || e === '[' && ch === ']') {
        items.pop()
      } else {
        return false
      }
    }
  }

  return items.length === 0
}

console.log(isValid('()'))