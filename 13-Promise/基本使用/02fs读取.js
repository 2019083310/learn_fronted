let fs=require('fs')

let p=new Promise((resolve,reject)=>{
    fs.readFile('./resource/a.txt',(error,data)=>{
        if(error){
            reject(error);
        }else{
            resolve(data)
        }
    })
})
p.then((data)=>{
    console.log(data.toString())
},(reason)=>{
    console.log(reason);
})