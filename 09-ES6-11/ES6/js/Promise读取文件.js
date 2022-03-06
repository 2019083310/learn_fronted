const fs=require("fs");
fs.readFile("../resources/为学.md",(error,value)=>{
    if(error) throw error;
    console.log(value.toString());
});
//使用Promise封装
const p=new Promise(function(resolve,reject){
    fs.readFile("../resources/为学.md",(error,data)=>{
        if(error) reject(error);
        resolve(data);
    });
});
p.then(function(value){
    console.log(value.toString());
},function(err){
    console.log(err);
});