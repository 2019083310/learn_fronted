let express=require('express');
let app=express();
app.use(express.static('./public/'));
app.get('/',(req,res)=>{
    res.send('hello');
});
app.get('/login',(req,res)=>{
    res.send('login');
});
app.listen(8000,()=>{
    console.log('8000服务端口启动完毕');
});