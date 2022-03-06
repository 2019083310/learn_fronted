let http=require('http');
let server=http.createServer();
server.on('request',(req,res)=>{
    let url=req.url;
    if(url==='/plain'){
        res.setHeader('Content-type','text/html;charset=utf-8');
        res.end('<a href="http://www.baidu.com">百度</a>');
    }else if(url==='/pro'){
        res.setHeader('Content-type','text/plain;charset=utf-8');
        res.end('hello 世界');
    }
});
server.listen(8000,()=>{
    console.log('8000端口服务启动完毕!');
});