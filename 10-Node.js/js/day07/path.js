let fs=require('fs');
let path=require('path');
let express=require('express');

require('./foo/index')
let app=express();
// app.get('/',(req,res)=>{
//     fs.readFile('./foo/a.txt',(error,data)=>{
//         if(error){
//             res.send('404 Not Found');
//         }
//         res.send(data.toString());
//     })
// })
app.get('/',(req,res)=>{
    fs.readFile(path.join(__dirname,'./foo/a.txt'),(error,data)=>{
        if(error){
            res.send('404 Not Found');
        }
        res.send(data.toString());
    })
})
app.listen(8000,()=>{
    console.log('8000端口启动完毕')
})