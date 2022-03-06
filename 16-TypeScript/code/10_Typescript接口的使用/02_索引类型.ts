interface IndexLanguage{
  [index:number]:string
}

// 下面这种对象的索引值都是number类型
const frontLanguage:IndexLanguage={
  0:'HTML',
  1:'CSS',
  2:'JavaScript',
  3:'TypeScript',
  // index:'Vue'
}
frontLanguage[4]='Vue'//合法的


interface ILanguageYear{
  [name:string]:number
}

const LanguageYear:ILanguageYear={
  'C':1972,
  'Java':1995,
  'JavaScript':1996,
  'TypeScript':2014
}