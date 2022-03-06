//引入express框架
let express=require('express');
let server=express();
server.use('/public/',express.static('./public/'));
server.get('/',(req,res)=>{
    res.send('hello express');
});
server.get('/about',(req,res)=>{
    res.send('hello');
})
server.listen(8000,()=>{
    console.log('8000端口启动完毕');
})