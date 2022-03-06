type Method='Get'|'Post'

function request(url:string,method:Method){

}

type Request={
  url:string,
  method:Method
}

const options:Request={
  url:'http://www.baidu.com',
  method:'Post'
}

request(options.url,options.method)

export {}